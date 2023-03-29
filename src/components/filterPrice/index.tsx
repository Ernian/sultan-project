import { ChangeEventHandler } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/rtkHooks'
import { setPriceRange } from '../../store/filterSlice'

const FilterPrice = () => {
  const { min, max } = useAppSelector(state => state.filters.priceRange)
  const dispatch = useAppDispatch()

  const changeHandler: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const key = target.name as 'min' | 'max'
    const value = parseInt(target.value)
    dispatch(setPriceRange({ key, value }))
  }

  return (
    <div
      style={{
        marginTop: 10
      }}
    >
      <p
        style={{
          fontWeight: 300,
          lineHeight: '21px',
          color: '#3F4E65',
          marginBottom: 15
        }}
      >
        Цена&nbsp;
        <span
          style={{
            fontWeight: 500,
            lineHeight: '21px',
            color: '#111'
          }}>
          &#8376;
        </span>
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <input
          type="number"
          name='min'
          min={0}
          value={min}
          onChange={changeHandler}
          style={{
            width: 100,
            padding: '5px 10px',
            backgroundColor: '#FFC6504D',
            borderRadius: 15
          }}
        />
        <span
          style={{
            fontWeight: 500,
            color: '#111'
          }}>-</span>
        <input
          type="number"
          name='max'
          min={1}
          value={max}
          onChange={changeHandler}
          style={{
            width: 100,
            padding: '5px 10px',
            backgroundColor: '#FFC6504D',
            borderRadius: 15
          }}
        />
      </div>
    </div>
  )
}

export default FilterPrice