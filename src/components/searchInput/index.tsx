import { ChangeEventHandler, useEffect, useState } from 'react'
import { useAppDispatch } from '../../hooks/rtkHooks'
import { actionLogIn } from '../../store/adminSlice'
import searchIcon from '../../assets/svg/search-icon.svg'

const SearchInput = () => {
  const [pass, setPass] = useState('')
  const dispatch = useAppDispatch()

  const inputHandler: ChangeEventHandler<HTMLInputElement> = (event) => setPass(event.target.value)

  useEffect(() => {
    if (pass === 'adm') {
      dispatch(actionLogIn())
      setPass('')
    }
  }, [pass])

  return (
    <div className="search-input">
      <input type="text" placeholder='Поиск...' value={pass} onInput={inputHandler} />
      <img src={searchIcon} alt="search icon" />
    </div>
  )
}

export default SearchInput