import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = []

const postSave = createSlice({
    name : 'postSave',
    initialState,
    reducers : {
        addPostSave : {
            reducer(state, action){
                state.push(action.payload)
                localStorage.setItem(`${action.payload.urlToImage}`, JSON.stringify(state))
            },
            prepare(source, title, description, url, urlToImage){
                return{
                    payload: {
                        id: nanoid(),
                        source,
                        title, 
                        description,
                        url,
                        urlToImage
                    }
                }
            }
        },
        removeSave : {
            reducer(state, action){
                state.pop(action.payload)
                localStorage.removeItem(`${action.payload.urlToImage}`, JSON.stringify(state))
            },
            prepare(source, title, description, url, urlToImage){
                return{
                    payload: {
                        id: nanoid(),
                        source,
                        title, 
                        description,
                        url,
                        urlToImage
                    }
                }
            }
        }
    }
})

export const selectAllPostSave = (state) => state.postSave

export const {addPostSave,removeSave } = postSave.actions

export default postSave.reducer