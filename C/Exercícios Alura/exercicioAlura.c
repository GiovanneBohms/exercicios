#include <stdio.h>
#include <curses.h>
#include <panel.h>

int main() {
    WINDOW *my_win;
    PANEL *my_panel;
    MEVENT event;

    initscr();
    cbreak();
    noecho();
    keypad(stdscr, TRUE);
    mousemask(ALL_MOUSE_EVENTS, NULL);

    my_win = newwin(10, 30, 5, 10);
    box(my_win, 0, 0);
    my_panel = new_panel(my_win);
    update_panels();
    doupdate();

    while (1) {
        int ch = getch();
        if (ch == KEY_MOUSE) {
            if (getmouse(&event) == OK) {
                if (event.bstate & BUTTON1_CLICKED) {
                    mvwprintw(my_win, 1, 1, "Clique detectado em: (%d, %d)", event.y, event.x);
                    wrefresh(my_win);
                }
            }
        }
        if (ch == 'q') {
            break;
        }
    }

    endwin();
    return 0;
}
