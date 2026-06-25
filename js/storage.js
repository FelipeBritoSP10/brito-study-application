export const StorageManager = {
    key: 'BRITO_STUDY_DATA',
    save: (data) => localStorage.setItem(StorageManager.key, JSON.stringify(data)),
    load: () => JSON.parse(localStorage.getItem(StorageManager.key)) || []
};