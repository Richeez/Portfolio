import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`
body {
    margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Poppins;



}
    
*,*::before,*::after{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

::-webkit-scrollbar-thumb {
  background-color: var(--scroll-bar-color);
  border-radius: 1rem;
  border: 2px inset var(--transparent-color-01);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.2rem;
  background-color: var(--primary-color);
}

::-webkit-scrollbar-track {
  /* -webkit-margin-before: 6.3rem; */
          /* margin-block-start: 6.3rem; */
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  box-shadow: inset 0 0 6px var(--transparent-color-02);
  -webkit-box-shadow: inset 0 0 6px var(--transparent-color-02);
}


:root{
  --primary-color:${({ theme }) => theme.colors.primary};
  --color-black:${({ theme }) => theme.colors.black};
  --secondary-color:${({ theme }) => theme.colors.secondary};
  --color-white:${({ theme }) => theme.colors.white};
  --scroll-bar-color:${({ theme }) => theme.colors.scrollBarColor};
  --color-yellow:${({ theme }) => theme.colors.yellow};
  --color-yellow-1:${({ theme }) => theme.colors.yellow1};
  --light-blue-color:${({ theme }) => theme.colors.lightBlue};
  --box-shadow-01:${({ theme }) => theme.colors.boxShadow01};
  --color-grey-1:${({ theme }) => theme.colors.colorGrey1};
  --color-grey-2:${({ theme }) => theme.colors.colorGrey2};
  --color-grey-3:${({ theme }) => theme.colors.colorGrey3};
  --color-grey-4:${({ theme }) => theme.colors.colorGrey4};
  --color-grey-5:${({ theme }) => theme.colors.colorGrey5};
  --transparent:${({ theme }) => theme.colors.transparent};
  --transform: ${({ theme }) => theme.colors.transform};
  --transition: ${({ theme }) => theme.colors.transition};
  --box-shadow-1: ${({ theme }) => theme.colors.boxShow1};
  --box-shadow-2:${({ theme }) => theme.colors.boxShadow2};
  }


`;
export default Globalstyles