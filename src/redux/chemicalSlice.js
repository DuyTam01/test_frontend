import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    chemicals: [
        { "id": 1, "name": "Hydrochloric Acid", "formula": "HCI" },
        { "id": 2, "name": "Sodium Chlrode", "formula": "NaCl" },
        { "id": 3, "name": "Sulfuric Acid", "formula": "H2SO4" },
        { "id": 4, "name": "Ammoia", "formula": "NH4" },
        { "id": 5, "name": "Ethamol", "formula": "C2H5OH" },
    ]
}

const chemicalSlice = createSlice({
    name: "chemicals",
    initialState,
    reducers: {
        // addChemicals(state, action) {
        //     state.chemicals = [...state.chemicals, { id: 4, name: action.payload, checked: true }]
        // },
        deleteChemicals(state, action) {
            state.chemicals = state.chemicals.filter(item => item.id !== action.payload)
        }
            // updateChemical(state, action){
            //     state.chemicals = state.chemicals.filter(item=>item.id ===action.payload)
            // }
    }
})

export const {deleteChemicals} = chemicalSlice.actions
export default chemicalSlice.reducer