import React, { useEffect } from 'react'
import { Container, WrapperLeft, WrapperRight } from './styled'
import logo from '../../assets/images/redux.svg'
import { AiOutlineSearch } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { actViewInput, actViewNav, actHideNav } from '../../store/landing/action'
import MenuBurger from '../Burger'
import OptionsHeader from '../OptionsHeader'

const Header = () => {
  const dispatch = useDispatch()
  const viewInput = useSelector((state) => state.landing.viewInput)
  const viewTabHeader = useSelector((state) => state.landing.viewTabHeader)
  const handleSearch = () => {
    dispatch(actViewInput())
  }
  useEffect(() => {
    if (window.screen.width > 1000) {
      dispatch(actViewNav())
    } else {
      dispatch(actHideNav())
    }
  }, [dispatch])
  return (
    <Container>
      {window.screen.width <= 1000 && <MenuBurger />}
      <WrapperLeft>
        <img src={logo} alt="Logotipo do redux" />
        {!viewInput ? <span>Redux</span> : <span>Redux</span>}
      </WrapperLeft>
      <WrapperRight>
        {viewTabHeader && <OptionsHeader />}
        {viewInput && (
          <input
            type="text"
            name="search"
            id="search"
            onChange={() => false}
            value={'Search'}
          />
        )}
        {!viewInput && (
          <i>
            <AiOutlineSearch size={20} onClick={handleSearch} />
          </i>
        )}
      </WrapperRight>
    </Container>
  )
}
export default Header
