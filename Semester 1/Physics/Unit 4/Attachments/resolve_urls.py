import urllib.parse
import urllib.request
import json
import sys

filenames = [
    "File:Spontaneous_Emission.svg",
    "File:3 Level Laser System Diagram.svg",
    "File:4 Level Laser System Diagram.svg",
    "File:Construction_of_a_laser.svg",
    "File:Time coherence.gif",
    "File:Spatial_coherence.svg",
    "File:LaserModes.jpg",
    "File:He-Ne-Laser-Energieschema.svg",
    "File:VibrationModesCO2.svg",
    "File:Structure_of_heterojunction_laser.png",
    "File:Holography-record.png",
    "File:Dipole_polarisation_of_a_dielectric_material.svg",
    "File:Pyroelectric-Ferroelectric_Titanate_Diagram.png",
    "File:Ferroelectric_hysteresis.svg",
    "File:Second_harmonic_generation.svg",
    "File:Optical Tweezer Principle (English).jpg",
    "File:Doppler laser cooling.svg",
    "File:LED Banddiagramm.png"
]

api_url = "https://commons.wikimedia.org/w/api.php"

def get_url(filename):
    params = {
        "action": "query",
        "titles": filename,
        "prop": "imageinfo",
        "iiprop": "url",
        "format": "json"
    }
    query_string = urllib.parse.urlencode(params)
    url = f"{api_url}?{query_string}"
    
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            pages = data.get("query", {}).get("pages", {})
            for page_id, page_data in pages.items():
                if "missing" in page_data:
                    return None
                image_info = page_data.get("imageinfo", [])
                if image_info:
                    return image_info[0].get("url")
    except Exception as e:
        print(f"Error fetching {filename}: {e}", file=sys.stderr)
    return None

results = {}
for f in filenames:
    url = get_url(f)
    print(f"Processed {f}: {url if url else 'NOT_FOUND'}")
    if url:
        results[f] = url
    else:
        results[f] = "NOT_FOUND"

print(json.dumps(results, indent=2))
