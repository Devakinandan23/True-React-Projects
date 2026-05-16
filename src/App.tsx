import { useState } from 'react'


function App() {


  return (
    <div style={{backgroundColor: '#dfe6e9', height: '100vh'}}>
      <button>Add New</button>
      <div style={{display: 'flex',justifyContent: 'center'}}>
        <PostComponent/>
      </div>
      </div>
  )
}

const style = { width: 300, backgroundColor: "white",borderRadius: 10, borderColor: "grey", borderWidth: 1, padding: 10}

function PostComponent(){
  return(
  <div >
    <div style={style}>
      <div style={{display: 'flex', marginTop: 10}}>
        
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgefRCjyJXImBNPsYx6sHsdWoEjWkEDizQSWBhzaIUwOEonRyv0SCgMxVKUnD9hnjsB_ldVSbbcYBpCRGWvHuRfDseflFV2GgvgawB4sTdBQ&s=10' style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            marginRight: 5
          }}/>
        
        <div>
          <div style={{fontSize: 14}}>
            <b>Manik Khajuria</b>
          </div>
          <div style={{fontSize: 14}}>GSoC’26 @Fossasia | NITJ’28 | 100xDevs </div>
          <div style={{fontSize: 14}}>11h • Edited</div>
        </div>
      </div>
      
        <div style={{fontSize: 14}}>
          𝐌𝐢𝐧𝐝 𝐁𝐥𝐨𝐰𝐧 𝐌𝐲 𝐀𝐈 𝐂𝐡𝐚𝐭 𝐉𝐮𝐬𝐭 𝐅𝐞𝐥𝐭 𝐇𝐮𝐦𝐚𝐧?

        Okay, seriously, has anyone else had an AI interaction lately that just made you do a double take? I was just chatting with an AI, and for a moment there, it felt incredibly human. The way it understood context, responded with surprising nuance, and even seemed to anticipate my next question was genuinely wild.
        </div>
    </div>
  </div>
  )
}

export default App
