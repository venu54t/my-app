import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { init } from './meme.actions'
import { State } from './meme.reducer'

type Props = {
  
    message: string,
    status: string,
    init: () => any
}





// export default class MemeComponent extends React.Component<Props> {
//   constructor(props:Props)
//   {
//     super(props)
    
//   }
  
//   render() {
//     console.log(this.props.message)
//     return (
//       <div>
//          <div><img src={this.props.message} alt="not found"/></div>
//       </div>
//     );
//   }
// }


const  MemeComponent: React.FC<Props> = (props: Props) => {
 //const data = useSelector((state: State) => state.data)
//  useEffect(()=> {
//   props.init();
//  },[])
  console.log(props.message)
  return (
    <>
    <div>Hello</div>
    <div><img src={props.message} alt="not found"/></div>
    </>
  )
}
export default MemeComponent;
