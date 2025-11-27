// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
type SessionList = string[];

window.onload = function (): void {
    let storage1: string | null = localStorage.getItem('sessionsList');
    let newStorage: SessionList = [];

    if (storage1) {
        const parsed: any = JSON.parse(storage1)
        if (Array.isArray(parsed)) {
            newStorage = parsed as SessionList;
        } else {
            throw new Error('not an array')
        }

    }
    const newDate: Date = new Date();
    newStorage.push(newDate.toISOString());

    localStorage.setItem('sessionsList', JSON.stringify(newStorage));
}
