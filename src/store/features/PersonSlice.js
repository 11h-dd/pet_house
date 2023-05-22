import {createSelector, createSlice} from "@reduxjs/toolkit";

const initialState = {
    person: {}, EntrustListDetailsById: {
        char: [], char_images: []
    }, collect: {
        char: [], count: 0,
    }
}
export const PersonSlice = createSlice({
    name: "Person", initialState, reducers: {
        DetailLIstData: (state, action) => {
            state.EntrustListDetailsById = action.payload
        }, MyCollect: (state, action) => {
            state.collect.char = action.payload.char
            state.collect.count = action.payload.count
        }
    }
})
const DetailsList = state => state.Person.EntrustListDetailsById
//收藏
const Collection = state => state.Person.collect
export const DetailsListSelector = createSelector(DetailsList, DetailsList => DetailsList)
export const CollectSelector = createSelector(Collection, Collection => Collection)
export const {DetailLIstData, MyCollect} = PersonSlice.actions