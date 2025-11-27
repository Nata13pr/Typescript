"use strict";
window.onload = function () {
    let storage1 = localStorage.getItem('sessionsList');
    let newStorage = [];
    if (storage1) {
        const parsed = JSON.parse(storage1);
        if (Array.isArray(parsed)) {
            newStorage = parsed;
        }
        else {
            throw new Error('not an array');
        }
    }
    const newDate = new Date();
    newStorage.push(newDate.toISOString());
    localStorage.setItem('sessionsList', JSON.stringify(newStorage));
};
