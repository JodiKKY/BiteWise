import React from 'react'

function auth() {
  const [signIn, toggle] = React.useState(true);
  
    

  return (
    <Container>
      <SignUpContainer signingIn={signIn}>
        <form>
          <h2>Create Account</h2>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      </SignUpContainer>
      <SignInContainer signingIn={signIn}>
        <form>
          <h2>Sign in</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button type="submit">Sign In</button>
        </form>
      </SignInContainer>
      <OverlayContainer signingIn={signIn}>
        <Overlay signingIn={signIn}>
          <LeftOverlayPanel signingIn={signIn}>
            <title>Welcome Back!</title>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <GhostButton onClick={() => toggle(true)}>
              Sign In
            </GhostButton>
          </LeftOverlayPanel>
          <RightOverlayPanel signingIn={signIn}>
            <h2>Hello, Friend!</h2>
            <p>
              Enter your personal details and start journey with us
            </p>
            <GhostButton onClick={() => toggle(false)}>
              Sign Up
            </GhostButton>
          </RightOverlayPanel>
        </Overlay>
      </OverlayContainer>
    </Container>
  );
  }
export default auth
