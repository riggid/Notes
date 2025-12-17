import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np

def draw_element(ax, etype, start, end, label=None, invert=False, offset_label=False):
    x1, y1 = start
    x2, y2 = end
    dx, dy = x2 - x1, y2 - y1
    cx, cy = x1 + dx/2, y1 + dy/2
    length = np.hypot(dx, dy)
    
    if length == 0: return

    ux, uy = dx/length, dy/length
    px, py = -uy, ux # Perpendicular
    
    # Label Position
    lx, ly = cx + px*0.4, cy + py*0.4
    if offset_label:
        lx, ly = cx + px*0.6, cy + py*0.6
        
    if etype == 'W': # Wire
        ax.plot([x1, x2], [y1, y2], 'k-', zorder=1)
        
    elif etype == 'R': # Resistor
        gap = 0.2 * length
        if gap > 0.5: gap = 0.5
        
        ax.plot([x1, x1 + ux*gap], [y1, y1 + uy*gap], 'k-', zorder=1)
        ax.plot([x2 - ux*gap, x2], [y2 - uy*gap, y2], 'k-', zorder=1)
        
        n_zigs = 6
        zig_amp = 0.25
        zig_len = length - 2*gap
        zig_step = zig_len / n_zigs
        
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

    elif etype == 'V': # Voltage Source
        gap = 0.1 * length
        if gap > 0.4: gap=0.4
        ax.plot([x1, cx - ux*gap], [y1, cy - uy*gap], 'k-', zorder=1)
        ax.plot([cx + ux*gap, x2], [cy + uy*gap, y2], 'k-', zorder=1)
        
        w = 0.4
        pos_c = (cx + ux*0.05, cy + uy*0.05) if not invert else (cx - ux*0.05, cy - uy*0.05)
        neg_c = (cx - ux*0.05, cy - uy*0.05) if not invert else (cx + ux*0.05, cy + uy*0.05)
        
        ax.plot([pos_c[0] + px*w, pos_c[0] - px*w], [pos_c[1] + py*w, pos_c[1] - py*w], 'k-', linewidth=2) # Long
        ax.plot([neg_c[0] + px*w*0.5, neg_c[0] - px*w*0.5], [neg_c[1] + py*w*0.5, neg_c[1] - py*w*0.5], 'k-', linewidth=2) # Short

    elif etype == 'I': # Current Source
        gap = 0.0
        ax.plot([x1, cx - ux*0.3], [y1, cy - uy*0.3], 'k-', zorder=1)
        ax.plot([cx + ux*0.3, x2], [cy + uy*0.3, y2], 'k-', zorder=1)
        
        circ = patches.Circle((cx, cy), 0.3, fill=False, color='k', linewidth=1.5)
        ax.add_patch(circ)
        
        direction = -1 if invert else 1
        ax.arrow(cx - ux*0.15*direction, cy - uy*0.15*direction, ux*0.3*direction, uy*0.3*direction, 
                 head_width=0.1, head_length=0.1, fc='k', ec='k')

    elif etype == 'O': # Open / Terminals
        ax.plot([x1, x2], [y1, y2], 'k:', zorder=1)
        c1 = patches.Circle((x1, y1), 0.08, fill=False, color='k')
        c2 = patches.Circle((x2, y2), 0.08, fill=False, color='k')
        ax.add_patch(c1)
        ax.add_patch(c2)

    if label:
        ax.text(lx, ly, label, ha='center', va='center', fontsize=11, 
                bbox=dict(facecolor='white', edgecolor='none', alpha=0.7))

def setup_ax():
    fig, ax = plt.subplots(figsize=(6, 4))
    ax.set_aspect('equal')
    ax.axis('off')
    return fig, ax

def save_fig(name):
    plt.tight_layout()
    plt.savefig(f'Attachments/{name}.png', dpi=150, bbox_inches='tight')
    plt.close()

def draw_ex1():
    fig, ax = setup_ax()
    draw_element(ax, 'V', (0,0), (0,4), "12V", invert=True)
    draw_element(ax, 'V', (0,4), (3,4), "10V", invert=True)
    draw_element(ax, 'R', (3,4), (3,2), "8$\Omega$")
    draw_element(ax, 'V', (3,2), (3,0), "6V")
    draw_element(ax, 'V', (3,0), (0,0), "8V")
    save_fig('example_1_diagram')

def draw_ex2():
    fig, ax = setup_ax()
    A, X = (0,0), (0,3)
    Y, C = (2.5, 3), (2.5, 0)
    D, E, Z, B = (4.5, 0), (6.5, 0), (9, 3), (9, 0)
    draw_element(ax, 'V', A, X, "20V")
    draw_element(ax, 'R', X, Y, "5$\Omega$")
    draw_element(ax, 'R', Y, C, "3$\Omega$")
    draw_element(ax, 'R', C, A, "2$\Omega$")
    draw_element(ax, 'R', C, D, "2$\Omega$")
    draw_element(ax, 'V', D, E, "10V")
    draw_element(ax, 'R', E, B, "5$\Omega$")
    draw_element(ax, 'V', B, Z, "40V", invert=True)
    M = (6.5, 3)
    draw_element(ax, 'R', Z, M, "5$\Omega$")
    draw_element(ax, 'W', M, E)
    ax.text(0, -0.3, "A"); ax.text(9, -0.3, "B")
    save_fig('example_2_diagram')

def draw_ex3():
    fig, ax = setup_ax()
    TL, TR, BL, BR = (0, 2.5), (6, 2.5), (0, -2.5), (6, -2.5)
    MT, MB, ML, MR = (3, 2.5), (3, -2.5), (0, 0), (6, 0)
    C = (3, 0)
    draw_element(ax, 'R', TL, MT, "1$\Omega$")
    draw_element(ax, 'R', MT, TR, "8$\Omega$")
    draw_element(ax, 'R', TR, MR, "7$\Omega$")
    draw_element(ax, 'R', MR, BR, "4$\Omega$")
    draw_element(ax, 'R', BR, MB, "1$\Omega$")
    draw_element(ax, 'R', MB, BL, "3$\Omega$")
    draw_element(ax, 'R', BL, ML, "2$\Omega$")
    draw_element(ax, 'R', ML, TL, "2$\Omega$")
    draw_element(ax, 'R', MT, C, "$R_a$")
    draw_element(ax, 'R', MB, C)
    draw_element(ax, 'R', ML, C, "$R_b$")
    draw_element(ax, 'R', MR, C)
    draw_element(ax, 'W', (-1.5, 2.5), TL)
    ax.text(-1.5, 2.5, "y")
    save_fig('example_3_diagram')

def draw_ex5():
    fig, ax = setup_ax()
    draw_element(ax, 'O', (0,4), (0,0), "20V")
    draw_element(ax, 'W', (0,4), (4,4))
    draw_element(ax, 'W', (0,0), (4,0))
    draw_element(ax, 'R', (2,4), (2,2), "$R_1=25\Omega$")
    draw_element(ax, 'R', (2,2), (2,0), "$R_3=15\Omega$")
    draw_element(ax, 'R', (4,4), (4,2), "$R_2=40\Omega$")
    draw_element(ax, 'R', (4,2), (4,0), "$R_4=10\Omega$")
    ax.text(2.2, 2, "A"); ax.text(3.8, 2, "B")
    save_fig('example_5_diagram')

def draw_ex7():
    fig, ax = setup_ax()
    draw_element(ax, 'I', (0,0), (0,3), "5A")
    draw_element(ax, 'W', (0,3), (2,3))
    draw_element(ax, 'R', (2,3), (2,0), "2$\Omega$")
    draw_element(ax, 'W', (2,0), (0,0))
    draw_element(ax, 'V', (2,3), (4,3), "6V")
    draw_element(ax, 'I', (4,3), (4,0), "2A")
    draw_element(ax, 'W', (4,0), (2,0))
    draw_element(ax, 'W', (4,3), (6,3))
    draw_element(ax, 'R', (6,3), (6,0), "4$\Omega$")
    draw_element(ax, 'W', (6,0), (4,0))
    save_fig('example_7_diagram')

def draw_ex13():
    fig, ax = setup_ax()
    draw_element(ax, 'W', (0,0), (7,0))
    draw_element(ax, 'V', (0,3), (0,0), "42V", invert=True)
    draw_element(ax, 'R', (0,3), (2,3), "3$\Omega$")
    draw_element(ax, 'R', (2,3), (2,0), "4$\Omega$")
    draw_element(ax, 'V', (2,0), (2,3), "25V", invert=True)
    draw_element(ax, 'R', (2,3), (4,3), "5$\Omega$")
    draw_element(ax, 'V', (4,3), (5,3), "57V")
    draw_element(ax, 'R', (4,3), (4,0), "6$\Omega$")
    draw_element(ax, 'V', (4,0), (4,3), "70V")
    draw_element(ax, 'R', (5,3), (7,3), "7$\Omega$")
    draw_element(ax, 'V', (7,3), (7,0), "4V", invert=True)
    save_fig('example_13_diagram')

def draw_ex14():
    fig, ax = setup_ax()
    draw_element(ax, 'W', (0,0), (8,0))
    draw_element(ax, 'V', (0,3), (0,0), "100V", invert=True)
    draw_element(ax, 'R', (0,3), (2,3), "8$\Omega$")
    draw_element(ax, 'R', (2,3), (2,0), "4$\Omega$")
    draw_element(ax, 'R', (2,3), (4,3), "2$\Omega$")
    draw_element(ax, 'R', (4,3), (4,0), "3$\Omega$")
    draw_element(ax, 'R', (4,3), (6,3), "10$\Omega$")
    draw_element(ax, 'R', (6,3), (6,0), "5$\Omega$")
    draw_element(ax, 'I', (6,3), (8,3), "8A", invert=True)
    draw_element(ax, 'W', (8,3), (8,0))
    save_fig('example_14_diagram')

def draw_ex15():
    fig, ax = setup_ax()
    A, B = (2,3), (4,0)
    draw_element(ax, 'I', (0,0), (0,3), "4A")
    draw_element(ax, 'W', (0,3), A)
    draw_element(ax, 'R', A, (2,0), "1$\Omega$")
    draw_element(ax, 'R', A, (4,3), "2$\Omega$")
    draw_element(ax, 'R', (4,3), B, "3$\Omega$")
    draw_element(ax, 'V', B, (0,0), "6V", invert=True)
    draw_element(ax, 'I', A, B, "5A", invert=True)
    save_fig('example_15_diagram')

def draw_ex16():
    fig, ax = setup_ax()
    draw_element(ax, 'V', (0,0), (0,2), "6V")
    draw_element(ax, 'R', (0,2), (2,2), "3$\Omega$")
    draw_element(ax, 'I', (2,0), (2,2), "4A")
    draw_element(ax, 'R', (2,2), (4,2), "1$\Omega$")
    draw_element(ax, 'R', (4,2), (4,0), "6$\Omega$")
    draw_element(ax, 'R', (4,2), (6,2), "3$\Omega$")
    draw_element(ax, 'V', (6,2), (6,0), "22V", invert=True)
    draw_element(ax, 'W', (6,0), (0,0))
    save_fig('example_16_diagram')

def draw_ex17():
    fig, ax = setup_ax()
    C = (3, 1.5)
    draw_element(ax, 'W', (0,0), (6,0))
    draw_element(ax, 'V', (0,3), (0,0), "32V", invert=True)
    draw_element(ax, 'R', (0,3), C, "40$\Omega$")
    draw_element(ax, 'I', C, (3,0), "6A", invert=True)
    draw_element(ax, 'V', C, (6,3), "20V")
    draw_element(ax, 'R', (6,3), (6,0), "160$\Omega$")
    draw_element(ax, 'I', (0,3), (6,3), "3A", invert=True)
    save_fig('example_17_diagram')

def draw_ex18():
    fig, ax = setup_ax()
    draw_element(ax, 'W', (0,0), (6,0))
    draw_element(ax, 'V', (0,0), (0,2), "2V")
    draw_element(ax, 'R', (0,2), (2,2), "2$\Omega$")
    draw_element(ax, 'I', (2,2), (2,0), "2A")
    draw_element(ax, 'R', (2,2), (4,2), "5$\Omega$")
    draw_element(ax, 'R', (4,2), (4,0), "1$\Omega$")
    draw_element(ax, 'R', (4,2), (6,2), "3$\Omega$")
    draw_element(ax, 'V', (6,2), (6,0), "4V")
    save_fig('example_18_diagram')

def draw_ex19():
    fig, ax = setup_ax()
    draw_element(ax, 'W', (0,0), (8,0))
    draw_element(ax, 'V', (0,3), (0,0), "90V", invert=True)
    draw_element(ax, 'R', (0,3), (2,3), "60$\Omega$")
    draw_element(ax, 'R', (2,3), (2,0), "30$\Omega$")
    draw_element(ax, 'V', (2,3), (4,3), "50V")
    draw_element(ax, 'R', (4,3), (6,3), "$R$")
    draw_element(ax, 'R', (6,3), (8,3), "40$\Omega$")
    draw_element(ax, 'V', (8,3), (8,0), "100V")
    draw_element(ax, 'R', (6,3), (6,0), "60$\Omega$")
    save_fig('example_19_diagram')

def draw_ex20():
    fig, ax = setup_ax()
    A, B, C, D = (0,1.5), (4,3), (6,1.5), (2,0)
    TJ = (2,3)
    draw_element(ax, 'V', A, TJ, "2V")
    draw_element(ax, 'R', TJ, B, "10$\Omega$")
    draw_element(ax, 'R', B, C, "30$\Omega$")
    draw_element(ax, 'W', C, D)
    draw_element(ax, 'R', D, TJ, "20$\Omega$")
    draw_element(ax, 'W', D, A)
    draw_element(ax, 'R', B, D, "40$\Omega$")
    save_fig('example_20_diagram')

def draw_ex21():
    fig, ax = setup_ax()
    draw_element(ax, 'W', (0,0), (8,0))
    # draw_element(ax, 'W', (0,3), (2,3)) - Replaced by R6
    draw_element(ax, 'V', (0,0), (0,3), "60V")
    draw_element(ax, 'R', (0,3), (2,3), "6$\Omega$")
    draw_element(ax, 'R', (2,3), (2,0), "12$\Omega$")
    draw_element(ax, 'R', (2,3), (4,3), "4$\Omega$")
    draw_element(ax, 'R', (4,3), (4,0), "8$\Omega$")
    # draw_element(ax, 'W', (4,3), (6,3)) - Check topology Ex 21
    # Ex21: (4,3) to[short] (6,3). Then (6,3) to I 8A.
    draw_element(ax, 'W', (4,3), (6,3))
    draw_element(ax, 'I', (6,0), (6,3), "8A", invert=True)
    draw_element(ax, 'W', (6,3), (8,3))
    ax.text(8, 3, "A"); ax.text(8, 0, "B")
    draw_element(ax, 'O', (8,3), (8,0), "")
    save_fig('example_21_diagram')

def draw_ex22():
    fig, ax = setup_ax()
    draw_element(ax, 'I', (0,0), (0,3), "9A")
    draw_element(ax, 'W', (0,3), (2,3))
    draw_element(ax, 'W', (2,3), (4,3))
    draw_element(ax, 'W', (4,3), (6,3))
    draw_element(ax, 'W', (6,3), (8,3))
    draw_element(ax, 'W', (0,0), (8,0))
    draw_element(ax, 'R', (2,3), (2,0), "6$\Omega$")
    draw_element(ax, 'R', (4,3), (4,0), "$R$")
    draw_element(ax, 'R', (6,3), (6,0), "3$\Omega$")
    draw_element(ax, 'I', (8,3), (8,0), "2A", invert=True)
    save_fig('example_22_diagram')

if __name__ == "__main__":
    try:
        draw_ex1()
        draw_ex2()
        draw_ex3()
        draw_ex5()
        draw_ex7()
        draw_ex13()
        draw_ex14()
        draw_ex15()
        draw_ex16()
        draw_ex17()
        draw_ex18()
        draw_ex19()
        draw_ex20()
        draw_ex21()
        draw_ex22()
    except Exception as e:
        print(e)
