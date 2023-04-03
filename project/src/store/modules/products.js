const state =
{
    products:
    [
        {
            id:1,
            name:'sidd',
            price:1500
        },
        {
            id:2,
            name:'om',
            price:2600
        },
    ]
};

const getters = {
    allProducts: state => state.products //store all products in state (allProducts is variable)
};
const actions = {};
const mutations = {};

export default
{
    state,
    getters,
    actions,
    mutations
}

