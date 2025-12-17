import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np

def draw_element(ax, etype, start, end, label=None, invert=False):
    x1, y1 = start
    x2, y2 = end
    dx, dy = x2 - x1, y2 - y1
    cx, cy = x1 + dx/2, y1 + dy/2
    length = np.hypot(dx, dy)
    
    if length == 0: return

    ux, uy = dx/length, dy/length
    px, py = -uy, ux 
    
    lx, ly = cx + px*0.4, cy + py*0.4
        
    if etype == 'W': 
        ax.plot([x1, x2], [y1, y2], 'k-', zorder=1)
        
    elif etype == 'R': 
        gap = 0.2 * length
        if gap > 0.5: gap = 0.5
        ax.plot([x1, x1 + ux*gap], [y1, y1 + uy*gap], 'k-', zorder=1)
        ax.plot([x2 - ux*gap, x2], [y2 - uy*gap, y2], 'k-', zorder=1)
        
        n_zigs = 6
        zig_amp = 0.25
        zig_len = length - 2*gap
        zig_x = [x1 + ux*gap]
        zig_y = [y1 + uy*gap]
        
        for i in range(n_zigs):
            t = (i + 0.5) / n_zigs
            par_x = x1 + ux*gap + ux*zig_len*t
            par_y = y1 + uy*gap + uy*zig_len*t
            sign = 1 if i % 2 == 0 else -1
            pt_x = par_x + px * zig_amp * sign
            pt_y = par_y + py * zig_amp * sign
            zig_x.append(pt_x)
            zig_y.append(pt_y)
        zig_x.append(x2 - ux*gap)
        zig_y.append(y2 - uy*gap)
        ax.plot(zig_x, zig_y, 'k-', zorder=1)

    elif etype == 'V': 
        gap = 0.1 * length
        if gap > 0.4: gap=0.4
        ax.plot([x1, cx - ux*gap], [y1, cy - uy*gap], 'k-', zorder=1)
        ax.plot([cx + ux*gap, x2], [cy + uy*gap, y2], 'k-', zorder=1)
        w = 0.4
        pos_c = (cx + ux*0.05, cy + uy*0.05) if not invert else (cx - ux*0.05, cy - uy*0.05)
        neg_c = (cx - ux*0.05, cy - uy*0.05) if not invert else (cx + ux*0.05, cy + uy*0.05)
        ax.plot([pos_c[0] + px*w, pos_c[0] - px*w], [pos_c[1] + py*w, pos_c[1] - py*w], 'k-', linewidth=2) 
        ax.plot([neg_c[0] + px*w*0.5, neg_c[0] - px*w*0.5], [neg_c[1] + py*w*0.5, neg_c[1] - py*w*0.5], 'k-', linewidth=2) 

    if label:
        ax.text(lx, ly, label, ha='center', va='center', fontsize=11, 
                bbox=dict(facecolor='white', edgecolor='none', alpha=0.7))

def setup_ax():
    fig, ax = plt.subplots(figsize=(8, 4))
    ax.set_aspect('equal')
    ax.axis('off')
    return fig, ax

def save_fig(name):
    plt.tight_layout()
    plt.savefig(f'Attachments/{name}.png', dpi=150, bbox_inches='tight')
    plt.close()

def draw_l1_q2():
    fig, ax = setup_ax()
    # Left Loop
    draw_element(ax, 'W', (0,0), (6,0))
    draw_element(ax, 'V', (0,0), (0,3), "20V")
    draw_element(ax, 'R', (0,3), (2,3), "5$\Omega$")
    draw_element(ax, 'R', (2,3), (4,3), "3$\Omega$")
    draw_element(ax, 'R', (4,3), (6,3), "2$\Omega$")
    draw_element(ax, 'W', (6,3), (6,0))
    ax.text(4, 3.2, "A")
    
    # Right Loop (Shifted by 8)
    draw_element(ax, 'W', (8,0), (12,0))
    draw_element(ax, 'V', (8,0), (8,3), "40V", invert=True)
    draw_element(ax, 'R', (8,3), (10,3), "5$\Omega$")
    draw_element(ax, 'R', (10,3), (12,3), "5$\Omega$")
    draw_element(ax, 'V', (12,3), (12,0), "10V", invert=True)
    ax.text(10, 3.2, "B")
    
    # Ground symbols?
    # Just draw lines
    ax.text(0, -0.2, "GND")
    ax.text(8, -0.2, "GND")
    
    save_fig('l1_q2_diagram')

if __name__ == "__main__":
    draw_l1_q2()
