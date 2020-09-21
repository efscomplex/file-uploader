import React, {createRef } from 'react';
import { styled } from 'goober'
import Uploader from './components/Uloader'

export default function MyApp() {
   const [img, setImg] = React.useState(null)
   const dragHandle = event => {
      event.preventDefault()
      const src = URL.createObjectURL(event.dataTransfer.items[0].getAsFile());
      const image = React.createElement('img',{src})
      setImg(()=> image)
   }
   const loaderRef = createRef(null)
   const onChangeUploader = (e)=>{
      const src = URL.createObjectURL(e.target.files[0]);
      const image = React.createElement('img',{src})
      setImg(()=> image)
   }
  return (
		<App className='App'>
			<header>
				<Title>Upload Your Image</Title>
            <Text> files should be *.png, *.jpg, *.svg</Text>
			</header>
         <Main>
            <Container id='draggable' onDrop={dragHandle} onDragOver={event => event.preventDefault()}>
               <Img src='upload.svg' alt='upload'/>
               <ImgLoaded src={img?.props.src || '/image.svg'} alt='upload'/>
               {!img && <Text style={{padding: '2rem'}}> Drag and drop you image here </Text>}
               <Img src='upload-2.svg' alt='upload'/>
            </Container>
         </Main>
         <Footer>
            <Text>Or</Text>
            <Uploader ref={loaderRef} accept='.jpg, .png, .svg' type='file' onChange={onChangeUploader}/>
         </Footer>
		</App>
  )
}
const tabletBreak = '920px'
const ImgLoaded = styled('img')`
   height: 100%;
   width: 300px;
   border-radius: 6px;
   box-shadow: 26px 31px 28px -24px rgba(0,0,0,0.69);
`
const Img = styled('img')`
   position: absolute;
   width: 220px;
   display: inline-block;
   &:nth-of-type(1){
      left:0;
      top: 0;
      transform: translate(-50%,-50%);
   }
   &:nth-of-type(3){
      right:0;
      bottom: 0;
      transform: translate(50%,50%);
   }
   @media (max-width:${tabletBreak} ){
      display: none;
   }
`
const Footer = styled('footer')`
   margin: 1rem 0 3rem;
   font-size:1.4rem;
   ${Uploader}{
      margin: 1rem auto;
      font-family: 'Montserrat';
   }
`
const Container = styled('div')`
   position: relative;  
   display: inline-block;
   padding: 1rem;
   @media(min-width: ${tabletBreak}){padding: 3rem 6rem 0;}
   border-radius: 19px;
   background-color: var(--text);
   > * {margin: auto;}
   * { max-width: 100%;}
`
const Main = styled('main')`
  background: linear-gradient(to right, var(--accent) 15px, transparent 15px, transparent 30px) 
   repeat-x top / 30px 2px, linear-gradient(to right, var(--accent) 15px, transparent 15px, transparent 30px) repeat-x bottom / 30px 2px,
   linear-gradient(var(--accent) 15px, transparent 15px, transparent 30px) 
   repeat-y 100% 0 / 2px 30px,linear-gradient(var(--accent) 15px, transparent 15px, transparent 30px) 
   repeat-y 0 100% / 2px 30px;
  margin: auto;
  min-width: 320px;
  width: fit-content;
  padding: 2rem;
`
const Title = styled('h1')`
   text-transform: capitalize;
   margin-bottom:1rem;
`
const Text = styled('h4')`
   text-transform: capitalize;
   color: var(--text-mute);
`
const App = styled('div')`
   background-color: var(--dark);
   color:var(--text);
   padding: 10vw;
   @media(max-width: ${tabletBreak}){
      padding: 4vw;
   }
   text-align: center;
   font-family: 'Montserrat';
   header{ margin-bottom: 3rem;}
`
