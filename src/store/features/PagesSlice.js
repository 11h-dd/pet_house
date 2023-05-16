import {createSelector, createSlice} from "@reduxjs/toolkit";

const initialState = {
    result: [], PageNum: 1, PageSize: 8, PageTotal: 0
}
export const PagesSlice = createSlice({
    name: "Pages", initialState, reducers: {
        SavePages: (state, action) => {
            state.result = action.payload.result
            state.PageNum = action.payload.PageNum
            state.PageSize = action.payload.PageSize
            state.PageTotal = action.payload.PageTotal
        },
        //页码加一
        PageNumAdd: (state,action)=> {
            state.PageNum = action.payload
        },

    }
})
const result = state => state.Pages.result
const PageNum = state => state.Pages.PageNum
const PageSize = state => state.Pages.PageSize
const PageTotal = state => state.Pages.PageTotal
export const PagesResultSelector = createSelector(result, (result) => result)
export const PagesNumSelector = createSelector(PageNum, (PageNum) => PageNum)
export const PagesSizeSelector = createSelector(PageSize, (PageSize) => PageSize)
export const PagesTotalSelector = createSelector(PageTotal, (PageTotal) => PageTotal)
export const {SavePages,PageNumAdd} = PagesSlice.actions