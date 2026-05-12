import { useState } from 'react'
import './App.css'

function App() {


  return (
    <PostComponent/>
  )
}

const style = {width: 200, backgroundColor: "white",borderRadius: 10, borderColor: "grey", borderWidth: 1, display: 'flex'}

function PostComponent(){
  return(
    <div>
    <div style={style}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgefRCjyJXImBNPsYx6sHsdWoEjWkEDizQSWBhzaIUwOEonRyv0SCgMxVKUnD9hnjsB_ldVSbbcYBpCRGWvHuRfDseflFV2GgvgawB4sTdBQ&s=10' style={{
        height: 100,
        width: 100,
        borderRadius: 50
      }}/>
      <div>
      <div style={{fontSize: 17}}>
        <b>Manik Khajuria</b>
      </div>
      <div >GSoC’26 @Fossasia | NITJ’28 | 100xDevs </div>
      <div>11h • Edited</div>
      </div>
    </div>
    <div>𝐌𝐢𝐧𝐝 𝐁𝐥𝐨𝐰𝐧 𝐌𝐲 𝐀𝐈 𝐂𝐡𝐚𝐭 𝐉𝐮𝐬𝐭 𝐅𝐞𝐥𝐭 𝐇𝐮𝐦𝐚𝐧?

    Okay, seriously, has anyone else had an AI interaction lately that just made you do a double take? I was just chatting with an AI, and for a moment there, it felt incredibly human. The way it understood context, responded with surprising nuance, and even seemed to anticipate my next question was genuinely wild.
</div>
    </div>
  )
}

export default App
