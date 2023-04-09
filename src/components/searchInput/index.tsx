import { useEffect, useState } from 'react'
import { useAppDispatch } from '../../hooks/rtkHooks'
import { actionLogIn } from '../../store/adminSlice'
import Input from '../input'
import searchIcon from '../../assets/svg/search-icon.svg'

const SearchInput = () => {
  const [pass, setPass] = useState('')
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (pass === 'adm') {
      dispatch(actionLogIn())
      setPass('')
    }
  }, [pass])

  return (
    <div className="search-input">
      <Input
        placeholder='Поиск...'
        value={pass}
        setPass={setPass}
      />
      <img src={searchIcon} alt="search icon" />
    </div>
  )
}

export default SearchInput