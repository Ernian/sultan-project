import { ChangeEventHandler, Dispatch, SetStateAction } from 'react'

const Input = ({
  placeholder,
  value,
  setPass,
  ...props
}: {
  placeholder: string,
  value: string,
  setPass: Dispatch<SetStateAction<string>>
}) => {
  const onInputHandler: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setPass(target.value)
  }

  return <input
    {...props}
    type="text"
    placeholder={placeholder}
    value={value}
    onInput={onInputHandler}
  />
}


export default Input