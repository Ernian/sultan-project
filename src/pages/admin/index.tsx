import { useState, FormEventHandler } from 'react'
import { Navigate } from 'react-router-dom'
import ProductCard from '../../components/productCard'
import { useAppSelector } from '../../hooks/rtkHooks'
import {
  Brands,
  ICategories,
  IData,
  IProduct,
  Producers,
  TypesOfMeasure,
  KeysCategories,
} from '../../types'
import json from '../../data.json'
import { producatsImages } from '../../productsImages'
import editIcon from '../../assets/svg/edit-icon.svg'

import './index.scss'

const AdminPage = () => {
  const {
    producers,
    categories: allCategories,
    brands,
    typesOfMeasure,
    products: jsonProducts
  } = json as IData

  const { isAdmin } = useAppSelector(state => state.admin)
  const [selectedProduct, setSelectedProduct] = useState(false)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [barcode, setBarcode] = useState('')
  const [typeOfMeasure, setTypeOfMeasure] = useState<TypesOfMeasure>('volume')
  const [valueOfMeasure, setValueOfMeasure] = useState(0)
  const [price, setPrice] = useState(0)
  const [url, setUrl] = useState<keyof typeof producatsImages>('product1')
  const [producer, setProducer] = useState<Producers>('Grifon')
  const [brand, setBrand] = useState<Brands>('Nivea')
  const [categories, setCategories] = useState<KeysCategories[]>(['bodyCare'])

  const storage = localStorage.getItem('products')
  const localStorageProducts = storage ? JSON.parse(storage) as IProduct[] : null
  let products = (localStorageProducts && localStorageProducts.length) ?
    localStorageProducts : jsonProducts
  localStorage.setItem('products', JSON.stringify(products))

  const checkData = (product: IProduct) => (
    product.title.trim() &&
    product.description.trim() &&
    product.brand &&
    product.producer &&
    product.categories.length &&
    product.price > 0 &&
    product.typeOfMeasure &&
    product.valueOfMeasure > 0 &&
    product.url &&
    !!product.barcode.trim()
  )
  const resetForm = () => {
    setTitle('')
    setDescription('')
    setBarcode('')
    setTypeOfMeasure('volume')
    setValueOfMeasure(0)
    setPrice(0)
    setUrl('product1')
    setProducer('Grifon')
    setBrand('Nivea')
    setCategories(['bodyCare'])
    setSelectedProduct(false)
  }

  const onSubmitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    const formProduct = {
      title,
      description,
      typeOfMeasure,
      valueOfMeasure,
      url,
      barcode,
      producer,
      price,
      brand,
      categories
    }
    if (!checkData(formProduct)) return null

    if (!products.some(product => product.barcode === barcode)) {
      products.push(formProduct)
    } else {
      products = products.map(product => {
        if (product.barcode === barcode) {
          return formProduct
        }
        return product
      })
    }
    localStorage.setItem('products', JSON.stringify(products))
    resetForm()
  }

  const deleteProduct = () => {
    if (!barcode) return null
    products = products.filter(product => product.barcode !== barcode)
    localStorage.setItem('products', JSON.stringify(products))
    resetForm()
  }

  return !isAdmin ? <Navigate to='/' /> :
    <div className='admin'>
      <div className='admin__products'>
        {
          products.map(product => (
            <div
              key={product.barcode}
              className='admin__card'
            >
              <div
                className='admin__edit'
                onClick={() => {
                  setSelectedProduct(true)
                  setTitle(product.title)
                  setDescription(product.description)
                  setTypeOfMeasure(product.typeOfMeasure)
                  setValueOfMeasure(product.valueOfMeasure)
                  setUrl(product.url)
                  setBarcode(product.barcode)
                  setPrice(product.price)
                  setProducer(product.producer)
                  setBrand(product.brand)
                  setCategories(product.categories)
                }}
              >
                <img src={editIcon} alt="edit" />
              </div>
              <ProductCard
                {...product}
                allCategories={allCategories}
              />
            </div>
          ))
        }
      </div>
      <div className='admin__panel'>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="title" style={{ fontWeight: 'bold' }}>
              Название товара&nbsp;&nbsp;
              <input
                type="text"
                id='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
          </div>

          <div style={{ marginTop: 10 }}>
            <label htmlFor="description" style={{ fontWeight: 'bold' }}>
              Описание товара&nbsp;&nbsp;
              <textarea
                name="description"
                id="description"
                cols={50}
                rows={2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>

          <div style={{ marginTop: 10 }}>

            <label htmlFor="typeOfmeasure" style={{ fontWeight: 'bold' }}>
              Oбъем/Вес&nbsp;&nbsp;
              <select
                name="typeOfmeasure"
                id="typeOfmeasure"
                onChange={(e) => setTypeOfMeasure(e.target.value as TypesOfMeasure)}
              >
                {typesOfMeasure.map(type => (
                  <option
                    value={type}
                    key={type}
                    selected={typeOfMeasure === type}
                  >
                    {type}
                  </option>
                ))}
              </select>
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <label htmlFor="valueOfmeasure" style={{ fontWeight: 'bold' }}>
              Oбъем/Вес&nbsp;&nbsp;
              <input
                type="number"
                name='valueOfmeasure'
                id='valueOfmeasure'
                value={valueOfMeasure}
                onChange={(e) => setValueOfMeasure(+e.target.value)}
              />
            </label>

          </div>

          <div style={{ marginTop: 10 }}>

            <label htmlFor="imgProduct" style={{ fontWeight: 'bold' }}>
              Изображение товара&nbsp;&nbsp;
              <select
                name="imgProduct"
                id="imgProduct"
                onChange={(e) => setUrl(e.target.value as keyof typeof producatsImages)}
              >
                {Object.keys(producatsImages).map(img => (
                  <option
                    value={img}
                    key={img}
                    selected={url === img}
                  >
                    {img}
                  </option>
                ))}
              </select>
            </label>

          </div>

          <div style={{ marginTop: 10 }}>

            <label htmlFor="barcode" style={{ fontWeight: 'bold' }}>
              Штрихкод товара&nbsp;&nbsp;
              <input
                type="text"
                name='barcode'
                id='barcode'
                value={barcode}
                onChange={(e) => setBarcode(e.target.value.trim())}
              />
            </label>

          </div>

          <div style={{ marginTop: 10 }}>

            <label htmlFor="price" style={{ fontWeight: 'bold' }}>
              Цена товара&nbsp;&nbsp;
              <input
                type="number"
                name='price'
                id='price'
                value={price}
                onChange={(e) => setPrice(+e.target.value)}
              />
            </label>

          </div>

          <div style={{ marginTop: 20, display: 'flex', gap: 30 }}>
            <div
              style={{
                marginTop: 20,
                display: 'flex',
                flexDirection: 'column',
                gap: 10
              }}
            >
              <p style={{ fontWeight: 'bold' }}>Производитель</p>
              {
                producers.map(prod => (
                  <label htmlFor={prod} key={prod}>
                    <input
                      type="radio"
                      name='producer'
                      id={prod}
                      checked={prod === producer}
                      value={prod}
                      onChange={(e) => setProducer(e.target.value as Producers)}
                    />
                    &nbsp;&nbsp;{prod}
                  </label>

                ))
              }
            </div>
            <div
              style={{
                marginTop: 20,
                display: 'flex',
                flexDirection: 'column',
                gap: 10
              }}
            >
              <p style={{ fontWeight: 'bold' }}>Бренд</p>
              {
                brands.map(br => (
                  <label htmlFor={br} key={br}>
                    <input
                      type="radio"
                      name='brand'
                      id={br}
                      value={br}
                      checked={br === brand}
                      onChange={(e) => setBrand(e.target.value as Brands)}
                    />
                    &nbsp;&nbsp;{br}
                  </label>

                ))
              }
            </div>

            <div
              style={{
                marginTop: 20,
                display: 'flex',
                flexDirection: 'column',
                gap: 10
              }}
            >
              <p style={{ fontWeight: 'bold' }}>Кaтегории</p>
              {
                Object.entries(allCategories).map(([catKey, catName]) => (
                  <label htmlFor={catKey} key={catKey}>
                    <input
                      type="checkbox"
                      name='producer'
                      value={catKey}
                      id={catKey}
                      checked={categories.includes(catKey as keyof ICategories)}
                      onChange={({ target: { value } }) => {
                        if (categories.includes(value as KeysCategories)) {
                          setCategories(categories.filter(cat => cat !== value))
                        } else {
                          setCategories([...categories, value as KeysCategories])
                        }
                      }}
                    />
                    &nbsp;&nbsp;{catName}
                  </label>
                ))
              }
            </div>
          </div>
          <div className='admin__buttons'>
            <button
              type='submit'
              className='admin__btn'
            >
              {selectedProduct ? 'Изменить товар' : 'Добавить товар'}
            </button>
            <button
              onClick={deleteProduct}
              className='admin__btn'
              disabled={!selectedProduct}
            >
              Удалить товар
            </button>
            <button
              onClick={resetForm}
              className='admin__btn'
            >
              Сбросить форму
            </button>
          </div>
        </form>
      </div>
    </div>

}

export default AdminPage