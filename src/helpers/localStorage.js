export const get = (keyName) => {
    try {
        return localStorage.getItem(keyName);
    } catch (error) {
        return null;
    }
};

export const set = (keyName, value) => {
    try {
        localStorage.setItem(keyName, value);

        return true;
    } catch (error) {
        return false;
    }
};

export const remove = (keyName) => {
    try {
        localStorage.removeItem(keyName);

        return true;
    } catch (error) {
        return false;
    }
};

export const loadState = (key) => {
    try {
        const serializedStorage = localStorage.getItem(key);
        if (serializedStorage === null) {
            return undefined;
        }
        return JSON.parse(serializedStorage);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (key, value) => {
    try {
        const serializedStorage = JSON.stringify(value);
        localStorage.setItem(key, serializedStorage);
    } catch (err) {
        // ignore write errors to localStorage
    }
};

export const lsIsSupported = () => {
    try {
        window.localStorage.setItem('test', '1');
        window.localStorage.removeItem('test');
        return true;
    } catch (error) {
        return false;
    }
};
