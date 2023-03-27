import { useAppSelector } from '../../hooks/rtkHooks'
import DesktopCatalogPage from './desktopCatalog'
import MobileCatalogPage from './mobileCatalog'
import { IData } from '../../types'
import json from '../../data.json'

import './index.scss'

const CatalogPage = () => {
  const { width } = useAppSelector(state => state.screenWidth)
  const data = json as IData

  return width > 1080 ?
    <DesktopCatalogPage {...data} /> :
    <MobileCatalogPage {...data} />
}

export default CatalogPage