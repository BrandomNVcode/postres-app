

export const filterProductSlider = (postres, categoriaID) => {
    if(categoriaID === 0) return postres;
    const filter = postres.filter(postre => postre.categorieID === categoriaID);
    return filter;
}


