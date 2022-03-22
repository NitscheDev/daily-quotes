import styled from 'styled-components'

function Loader() {
  return (
    <Container>
      <StyledLoader />
    </Container>
  )
}

//styled-components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border: 20px solid #232323;
  border-top: 20px solid #3682F4;
  border-radius: 50%;
  animation: rotate360 1s ease infinite;
`

export default Loader