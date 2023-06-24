

export const notNull = (obj) => {
    return (obj !== null && obj !== undefined) ? obj : false;
}