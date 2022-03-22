import styled from 'styled-components'
import Logo from '../Logo.svg'

function Header() {
  return (
    <StyledHeader>
        <img src={Logo} alt="" />
    </StyledHeader>
  )
}

//styled
const StyledHeader = styled.div`
    position: fixed;
    width: 100%;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 25px;
    }
`

export default Header