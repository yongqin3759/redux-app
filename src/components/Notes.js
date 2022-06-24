import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNotes, toggleImportanceOf } from '../reducers/noteReducer'
import noteService from '../services/notes'

const Note = ({ note, handleClick }) => {
  return(
    <li onClick={handleClick}>
      {note.content} 
      <strong> {note.important ? 'important' : ''}</strong>
    </li>
  )
}

const Notes = () => {
  const dispatch = useDispatch()

  useEffect( () => {
    async function intializeNotes(){
      try{
        const initialNotes = await noteService.getAll()
        dispatch(setNotes(initialNotes))
      }catch(ex){
        console.log(ex)
      }
    }
    intializeNotes()

  }, [dispatch])

  const notes = useSelector(state => {
    if(state.filter === 'ALL'){
      return state.notes
    }

    return state.filter  === 'IMPORTANT' 
      ? state.notes.filter(note => note.important)
      : state.notes.filter(note => !note.important)
  })

  return(
    <ul>
      {notes.map(note =>
        <Note
          key={note.id}
          note={note}
          handleClick={() => 
            dispatch(toggleImportanceOf(note.id))
          }
        />
      )}
    </ul>
  )
}

export default Notes