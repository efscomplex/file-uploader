import React, {createRef } from 'react';
import { styled } from 'goober'

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
   const imgStyle = {
      borderRadius: '6px',
      boxShadow: '26px 31px 28px -24px rgba(0,0,0,0.69)'
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
               <img src={img?.props.src || '/image.svg'} alt='upload' width= '300px' style={imgStyle}/>
               <Text style={{padding: '2rem'}}> Drag and drop you image here </Text>
               <Img src='upload-2.svg' alt='upload'/>
            </Container>
         </Main>
         <Footer>
            <Text>Or</Text>
            <input ref={loaderRef} accept='.jpg, .png, .svg' type='file' onChange={onChangeUploader}></input>
         </Footer>
		</App>
  )
}
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
`
const Footer = styled('footer')`
   margin: 1rem 0 3rem;
   font-size:1.4rem;
   > * {
      padding: 2rem;
   }
   input {
      border-radius: 9px;
      color: white;
      padding: .6rem 1.4rem;
      font-size: 1.2rem;
      font-family: 'Montserrat';
      background-color: var(--dark-accent);
      &:hover {
         background-color: var(--accent);
         color: var(--dark);
      }
      cursor: pointer;
   }
`
const Container = styled('div')`
   position: relative;  
   display: inline-block;
   padding: 3rem 6rem 0;
   border-radius: 19px;
   border: 3px dashed var(--dark-accent);
   background-image: linear-gradient(135deg, rgba(222, 246, 229, .3) 40%, rgba(186, 104, 200, .3));
   background: linear-gradient(135deg, rgba(222, 246, 229, .3) 40%, rgba(186, 104, 200, .3));

   > * {margin: auto;}
   * { max-width: 100%;}
`
const Main = styled('main')`
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
   background-color: var(--bg);
   color: var(--text);
   padding: 10vw;
   text-align: center;
   font-family: 'Montserrat';
   header{ margin-bottom: 3rem;}
`
