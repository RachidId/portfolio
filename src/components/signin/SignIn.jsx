import React from 'react'
import logo from '../../assets/logo.png'
import signimg from '../../assets/imgsign.png'


const SignIn = () => {
  const inputStyle = {
    width: "40.41%",
    height: "4.68%",
    border: "1px solid #A1A1A1",
    borderRadius: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.55)",
    backdropFilter: "backdrop-filter: blur(10px)",
    margin: "20px 160px 0px"
  }

  const buttonStyle = {
    width: "40.41%",
    height: "4.68%",
    border: "1px solid #FF9C00;",
    borderRadius: "10px",
    backgroundColor: "#FF9C00",
    margin: "20px 160px 0px",
    color: 'white'
  }

  return (
    <div style={{display: "flex", width:"100vw", height:"100vh", overflow:'hidden'}}>
      
      <div style={{width: "50%", backgroundColor:"rgba(255, 255, 255, 0.95)", height:"100%", textAlign:"center"}}>
        <img src={logo} alt="" style={{width:"29.16%", height:"7.29%",  margin:"90px auto 0px"}}/>
        <h1 className="text-black-300 text-[36px] font-bold mx-[294px] mt-[50px] 2xl:mt-[178px] mb-[0px] leading-normal">Sign In</h1>
        <p className='text-black-300 text-[16px] font-bold mx-[181px] mt-[30px] mb-[0px] leading-normal'>Sign in with your email address and password</p>
        <input type="text" style={inputStyle}/>
        <input type="text" style={inputStyle}/>
        <a href="" style={{margin: "10px 160px 0px 430px", color:"#FF9C00", fontSize: "14px", fontStyle: "normal", fontWeight:'400'}}>Forget password</a>
        <button style={buttonStyle}>Sign in</button>
        <a href="" style={{margin: "20px 302px 0px", color:"#FF9C00", fontSize: "14px", fontStyle: "normal", fontWeight:'400'}}>Create Account</a>
      </div>

      <div style={{width: "50%", backgroundColor:"#FF9C00", height:"100%"}}>
        <div style={{
          color: "white",
          fontFamily: "Inter",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: '700',
          width: "50%",
          height: "10%",
          lineHeight: "29px",
          margin: '133px 0px 0px 24px'
        }}>
          “Lorem Ipsum is simply dummy text of the printing and typesetting industry.”
        </div>

        <div style={{
          borderRadius: "49.824px",
          border: "34px solid #111",
          width: '813px',
          height: '1203px',
          margin: "39px 373px -2651px 179px",
          overflow: "hidden"
          }}>
          <img src={signimg} alt="" style={{
            borderRadius: '15px',
            background: 'url(<path-to-image>), lightgray 50% / cover no-repeat',
            width: '808px',
            height: '3530px'
          }}/>
        </div>
      </div>
    </div>
  )
}

export default SignIn