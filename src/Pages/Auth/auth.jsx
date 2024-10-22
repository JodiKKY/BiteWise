import React from 'react'

function auth() {
  const [signIn, toggle] = React.useState(true);
  return (
    <Container>
      <SignUpContainer signingIn={signIn}>
        <form>
          <title>Create Account</title>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </SignUpContainer>
      <SignInContainer signingIn={signIn}>
        <form>
          <title>Sign in</title>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <Anchor href="#">Forgot your password?</Anchor>
          <button>Sign In</button>
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
            <title>Hello, Friend!</title>
            <p>
              Enter your personal details and start journey with us
            </p>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </RightOverlayPanel>
        </Overlay>
      </OverlayContainer>
    </Container>
  );
  }
export default auth