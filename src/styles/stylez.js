import styled from "styled-components";

export const MainContainer = styled.main`
  background-color: var(--primary-color);
  min-height: 100vh;
  font-size: 1.1rem;
  color: var(--color-white);
  transition: var(--transition);
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;

  h1,
  h2,
  h3,
  h4 {
    font-weight: normal;
  }

  header {
    min-height: 50vh;
    overflow: hidden;
    color: inherit;
  }

  section {
    width: 100%;
    min-height: 50vh;
    display: absolute;
    top: 0;
    left: 0;
    padding-right: 7rem;

    padding-left: 4rem;

    padding-block: 3rem;
  }

  .section {
    transform: translateY(-100%) scale(0);
    transition: var(--transition);
    background-color: var(--primary-color);
  }

  .sec1 {
    display: none;
    transform: var(--transform);
    // background-color:blue;
  }
  .sec2 {
    display: none;
    transform: var(--transform);
    // background-color:orangered;
  }
  .sec3 {
    display: none;
    transform: var(--transform);
    // background-color:green;
  }
  .sec4 {
    display: none;
    transform: var(--transform);
    // background-color: gray;
  }
  .sec5 {
    display: none;
    transform: var(--transform);
    // background-color: peru;
  }

  .active {
    display: block;

    animation: scaleAnim 1s forwards ease-in-out;

    @keyframes scaleAnim {
      0% {
        transform: translateY(-100%) scaleY(0);
      }

      100% {
        transform: translateY(0) scaleY(1);
      }
    }
  }

  //TODO===========================HEADER CONTENT STARTS=============================//
  .header-contents {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .left-side {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      .frame {
        width: 90%;
        height: 100%;
        position: absolute;
        transition: var(--transition);
        background-color: var(--color-yellow);
        z-index: -1;
        top: 0;
        left: 0;
        //  border-radius: 10px;
        clip-path: polygon(0 0, 46% 0, 79% 100%, 0% 100%);
      }

      .image-cont {
        border-radius: 20px;
        width: 68%;
        height: 75%;
        transition: var(--transition);
        position: relative;
        margin-left: -2rem;
        background-color: var(--color-black);
        overflow: hidden;
        box-shadow: var(--box-shadow-01);

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }
      }
    }

    .right-side {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      // grid-row: span 2/3;
      padding-right: 7rem;

      .text-cont {
        width: 100%;
        text-align: start;
        // background-color: orangered;

        h1 {
          font-size: 3rem;
          margin: 2.3rem 0;
          font-weight: normal;
          /* text-transform:capitalize ; */
          color: var(--color-white);
          // line-height: 1.6;

          .name {
            color: var(--color-yellow);
          }
          .profession {
            display: flex;
            gap: 0.42rem;
            flex-wrap: wrap;
          }
        }
        p {
          font-size: 1rem;
          font-weight: normal;
          line-height: 1.6;
          margin: 1.7rem 0;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
      }
    }

    @media screen and (max-width: 63rem) {
      & {
        grid-template-columns: repeat(1, 1fr);
        padding-bottom: 2rem;
        place-content: center;
        /* background-color: orange; */

        .right-side {
          padding: 0.7rem;
          grid-row: 1;
          width: 90%;
          margin: 0 auto;
          .text-cont {
            h1 {
              font-size: 2.2rem;
            }
          }
        }

        .left-side {
          width: 90%;
          padding: 2rem;
          margin-top: 2.5rem;
          // background-color: aqua;

          .frame {
            display: block;
          }

          .image-cont {
            width: 90%;
            height: 100%;
            margin: 0 auto;
          }
        }
      }
    }

    @media screen and (max-width: 51rem) {
      & {
        grid-template-columns: 1fr;
        padding-bottom: 5rem;
        .right-side {
          padding: 0.7rem;
          grid-row: 1;
          width: 90%;
          margin: 0 auto;

          .text-cont {
            h1 {
              font-size: 2.2rem;
            }
          }
        }

        .left-side {
          width: 90%;
          margin: 0 auto;
          .frame {
            display: none;
          }
          .image-cont {
            width: 90%;
            height: 100%;
            margin: 0 auto;
          }
        }
      }
    }
  }

  //?===========================HEADER CONTENT ENDS=============================//

  //TODO========================ABOUT PAGE START==========================================//

  .about-cont {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 4rem;
    padding-bottom: 5rem;

    align-items: start;

    justify-items: start;

    .left-about {
      // display: flex;
      align-self: start;
      justify-self: start;
      // grid-column: 1 / 2;
      position: relative;
      .left-cont {
        // background-color: #c99922;
        h3 {
          font-weight: normal;
          font-size: 1.7rem;
          text-transform: capitalize;
        }

        p {
          padding-right: 2rem;
          font-size: 1rem;
          padding-block: 1rem;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          line-height: 1.6;
        }

        ol {
          padding-left: 1.5rem;
        }

        li {
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          line-height: 1.6;
          font-size: 1rem;
        }

        .btn-cont {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          margin-top: 20px;
        }
      }
    }

    .right-about {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      // grid-column:  2 / span 3;
      gap: 2rem;

      .about-items {
        border: 1px solid var(--color-grey-3);
        box-shadow: var(--box-shadow-01);
        transition: var(--transition);
        border-radius: 10px;

        &:hover {
          cursor: default;
          transform: translateY(-5px);
          border: 1px solid var(--color-yellow-1);
          box-shadow: var(--box-shadow-2);
        }

        .items-cont {
          padding: 1.5rem;

          display: flex;
          flex-direction: column;

          .large-text {
            font-size: 3rem;
            color: var(--color-yellow);
          }

          .small-text {
            padding-left: 3rem;
            font-size: 1.2rem;
            position: relative;
            text-transform: uppercase;
            color: var(--color-grey-3);
            letter-spacing: 2px;

            &::before {
              content: "";
              width: 2rem;
              top: 15px;
              left: 0;
              height: 2px;
              position: absolute;
              background-color: var(--color-grey-4);
            }
          }
        }
      }
      @media screen and (max-width: 63rem) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media screen and (max-width: 63rem) {
      & {
        grid-template-columns: 1fr;
        align-items: center;

        justify-items: center;

        .right-about {
          grid-template-columns: repeat(2, 1fr);
          padding-top: 3rem;
          // width: 90%;
          // margin: 0 auto;
        }

        .left-about {
          align-self: center;
          justify-self: center;
          padding: 0;
          // width: 90%;
          // margin: 0 auto;
        }

        .left-cont {
          padding-right: 0;

          p {
            padding-right: 0 !important;
          }

          h3 {
            font-size: 1.6rem !important;
          }
        }
      }
    }

    @media screen and (max-width: 51rem) {
      & {
        grid-template-columns: 1fr;
        align-items: center;

        justify-items: center;
        .right-about {
          grid-template-columns: 1fr;
          padding-top: 2rem;
          // width: 90%;
          // margin: 0 auto;
        }
        .left-about {
          align-self: center;
          justify-self: center;
          padding: 0;
          // width: 90%;
          // margin: 0 auto;
        }
        .left-cont {
          padding-right: 0;

          p {
            padding-right: 0 !important;
          }

          h3 {
            font-size: 1.6rem !important;
          }
        }
      }
    }
  }

  .my-stats {
    padding-bottom: 3rem;

    .progress-bars {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      justify-items: center;
      /* place-content:center; */

      .progress-bar {
        display: flex;
        flex-direction: column;
        /* container-type: inline-size; */

        .progress-title {
          text-transform: uppercase;
          width: 100%;
          /* font-weight: 500; */
          outline: 1px solid var(--color-yellow-1);
          box-shadow: var(--box-shadow-2);
          word-wrap: normal;
          padding: 0.2rem 1.5rem;
          letter-spacing: 2px;
          text-align: center;
          font-family: inherit;
          font-size: 0.9rem;
          // color: var(--color-grey-4);
          border-radius: 5px;
        }

        .progress-cont {
          display: flex;
          align-items: center;

          .progress-text {
            color: var(--color-grey-5);
          }

          .progress {
            width: 100%;
            height: 0.45rem;
            background-color: var(--color-grey-2);
            margin-left: 1rem;
            border-bottom-right-radius: 10px;
            border-top-right-radius: 10px;
            position: relative;

            span {
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              width: 90%;
              height: 100%;
              background-color: var(--color-yellow);
            }
          }
        }
      }

      @media screen and (max-width: 63rem) {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .stats-title {
    text-align: center;
    font-weight: normal;
    font-size: 1.5rem;
    padding: 3rem 0;
    letter-spacing: 1px;

    position: relative;
    text-transform: uppercase;

    &::before {
      content: "";
      width: 40%;
      height: 1px;
      position: absolute;
      top: 0;
      left: 50%;
      right: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--color-grey-3);
    }
  }

  .timeline {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding-bottom: 3rem;

    .timeline-item {
      padding-left: 4rem;
      border-left: 1px solid var(--color-grey-3);
      position: relative;

      .timeline-icon {
        position: absolute;
        margin-left: -60px;
        top: 0;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--color-yellow-1);
        display: flex;
        align-items: center;
        justify-content: center;

        i {
          font-size: 1.2rem;

          color: var(--color-grey-5);
        }
      }

      .timeline-duration {
        padding: 0.2rem 0.5rem;
        background-color: var(--color-grey-2);
        display: inline-block;
        font-size: 0.8rem;
        text-transform: uppercase;
        font-weight: 500;

        border-radius: 15px;
      }
      h4 {
        padding: 1rem 0;
        text-transform: uppercase;
        font-size: 1.2rem;

        span {
          color: var(--color-grey-3);
          font-size: 1.1rem;
        }
      }

      .duration-text {
        // color: var(--color-grey-4);
        font-size: 0.9rem;
        line-height: 1.6;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
      }
    }
    @media screen and (max-width: 63rem) {
      grid-template-columns: 1fr;
    }
  }

  //?========================ABOUT PAGE END==========================================//

  //TODO============================ PORTFOLIO PAGE START===================================//

  .port-text {
    padding: 2rem 0;
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  .portfolio-cont {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 3rem;
    gap: 2rem;

    .portfolio-items {
      position: relative;
      box-shadow: var(--box-shadow-01);
      overflow: hidden;
      border-radius: 15px;

      .image-cont {
        width: 100%;
        height: 300px;
        position: relative;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .hover-item {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--color-yellow-1);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 15px;
        opacity: 0;
        transform: scale(0) rotate(0deg);
        transition: var(--transition);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h4 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--color-grey-5);
          text-transform: capitalize;
        }

        .icons-cont {
          display: flex;
          align-items: center;
          justify-content: center;

          .icon {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background-color: var(--primary-color);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 0.7rem;
            cursor: pointer;

            .i {
              font-size: 1.5rem;
            }

            &:hover {
              background-color: var(--color-white);
              transition: var(--transition);

              .i {
                color: var(--primary-color);
                transition: var(--transition);
              }
            }
          }
        }
      }
      &:hover {
        .hover-item {
          opacity: 1;
          transform: scale(1) rotate(360deg);
          transition: var(--transition);
        }
      }
    }
    @media screen and (max-width: 63rem) {
      .portfolio-cont {
        .portfolio-items {
          .hover-item {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: var(--color-yellow-1);
            top: 0;
            bottom: 0;
            left: 0;
            padding: 1rem;
            right: 0;
            border-radius: 15px;
            opacity: 0;
            transform: scale(0) rotate(0deg);
            transition: var(--transition);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            h4 {
              font-size: 1.5rem;
              margin-bottom: 1.5rem;
              color: var(--color-grey-5);
            }

            .icons-cont {
              display: flex;
              align-items: center;
              justify-content: center;

              .icon {
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
                background-color: var(--primary-color);
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 0.5rem;
                cursor: pointer;

                .i {
                  font-size: 1.5rem;
                }

                &:hover {
                  background-color: var(--color-white);
                  transition: var(--transition);

                  .i {
                    color: var(--primary-color);
                    transition: var(--transition);
                  }
                }
              }
            }
          }

          &:hover {
            .hover-item {
              opacity: 1;
              transform: scale(1) rotate(360deg);
              transition: var(--transition);
            }
          }
        }
      }
    }
  }

  //?============================ PORTFOLIO PAGE END===================================//

  //TODO============================ BLOG PAGE START===================================//

  .blogs-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 3rem;
    gap: 2.3rem;

    .blog {
      position: relative;
      border-radius: 0.5rem;
      background-color: var(--color-grey-2);
      box-shadow: var(--box-shadow-01);
      transition: var(--transition);

      img {
        filter: grayscale(100%);
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
      }
      &:hover {
        box-shadow: var(--box-shadow-1);
        transition: var(--transition);
        transform: translate(-5px);
        img {
          transform: scale(1.1);
          filter: grayscale(0);
          box-shadow: var(--box-shadow-2);
          transition: var(--transition);
        }
      }

      .blog-text {
        padding: 1.1rem;
        margin-top: -7px;
        border-top: 8px solid var(--color-yellow);
        h4 {
          margin-bottom: 0.7rem;
          font-size: 1.3rem;
          &:hover {
            color: var(--color-yellow);
            cursor: pointer;
          }
        }

        p {
          line-height: 1.6;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          font-size: 0.9rem;
          padding-bottom: 1rem;
        }
      }
    }

    @media screen and (max-width: 51rem) {
      & {
        grid-template-columns: 1fr;
        padding-bottom: 2.5rem;
      }
    }
  }

  //?============================ BLOG PAGE END===================================//

  //TODO--INDEPENDENT-COMPONENTS

  .btn-cont {
    display: flex;
    align-self: flex-start;
    justify-content: center;
  }
  .btn-wrapper {
    display: flex;
    cursor: pointer;
    border-radius: 30px;
    border: 1px solid var(--color-yellow);
    position: relative;
    overflow: hidden;
    align-items: center;
    justify-content: center;

    .btn-text {
      padding: 0 1.7rem;
      // font-size: .7em;
      font-weight: 900;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .btn-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      pointer-events: none;
      background-color: var(--color-yellow);
      color: var(--color-grey-5);
      // box-shadow:var(--box-shadow-2);
      padding: 0.8rem;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      background-color: var(--color-yellow-1);
      z-index: -1;
      transition: var(--transition);
      transform: translate(100%);
    }
    &:hover::before {
      width: 100%;
      color: var(--color-grey-5);
      transition: var(--transition);
      transform: translate(0);
    }
    &:hover {
      box-shadow: var(--box-shadow-2);
      transition: var(--transition);
    }
  }

  .btn-wrapper:hover {
    .btn-text {
      color: var(--color-grey-5);
      transition: var(--transition);
    }
  }

  .main-title {
    text-align: center;

    h2 {
      font-size: 3.5rem;
      font-weight: normal;
      text-transform: uppercase;
      position: relative;
      text-shadow: 1px 2px 2px;
      // letter-spacing: 3px;

      .me {
        color: var(--color-yellow);
      }

      .foreground {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--color-grey-2);
        font-size: 5rem;
        white-space: nowrap;
        letter-spacing: 5px;
        z-index: -1;
      }
    }
  }

  .theme-cont {
    position: fixed;
    top: 5%;
    right: 3%;
    width: 2rem;
    height: 2rem;
    padding: 1rem;
    border-radius: 50%;
    background-color: var(--color-grey-1);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 100ms ease-in-out;
    .icon {
      font-size: 1.3rem;
      pointer-events: none;
      color: var(--color-grey-5);
      transition: color 100ms ease-in-out;
    }

    &:active {
      transform: translateY(-3px);

      .icon {
        color: var(--color-grey-4);
      }
    }
  }

  //TODO==================RANDOM STYLING=====================================/////
  @media screen and (max-width: 51rem) {
    .portfolio-cont {
      grid-template-columns: 1fr;
      padding-bottom: 2.5rem;
    }

    .timeline {
      grid-template-columns: 1fr;
    }
    section {
      padding-right: 2rem;
      padding-left: 2rem;
    }

    .main-title {
      text-align: center;
      h2 {
        font-size: 2.8rem;
        white-space: nowrap;
        .foreground {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: var(--color-grey-2);
          font-size: 4rem;
          white-space: nowrap;
          letter-spacing: 5px;
          z-index: -1;
        }
      }
    }

    .theme-cont {
      top: 2%;
    }

    .blogs-wrapper {
      grid-template-columns: 1fr;
      padding-bottom: 2.5rem;
    }

    .btn-cont {
      .btn-text {
        padding: 0 0.7rem;
        font-size: 1rem;
      }
    }
  }
`;
export const MenuContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 3%;
  display: flex;
  z-index: 5;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 20px;
  transform: translateY(-50%);
  .active-btn {
    background-color: var(--color-yellow) !important;
    transition: var(--transition);
    box-shadow: var(--box-shadow-2);
    color: var(--color-grey-5) !important;
    padding: 1rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: var(--color-grey-1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
  }

  .control {
    padding: 1rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: var(--color-grey-1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;

    &:hover {
      background-color: var(--color-yellow) !important;
      transition: var(--transition);
      box-shadow: var(--box-shadow-2);

      .icon {
        color: var(--color-grey-5) !important;
        transition: var(--transition);
      }
    }

    .icon {
      pointer-events: none;
      color: var(--color-grey-4);
    }
  }

  @media screen and (max-width: 51rem) {
    position: fixed;
    bottom: 0;
    top: auto;
    left: 50%;
    padding: 0.7rem 1rem;
    transform: translateX(-50%);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    column-gap: 20px;
    background-color: var(--color-grey-1);
  }
`;
export const defaultSection = styled.section`
  transform: translateY(-100%) scale(0);
  transition: var(--transition);
  background-color: var(--primary-color);
`;
export const Sec1 = styled(defaultSection)`
  display: none;
  transform: var(--transform);
`;
export const Sec2 = styled(defaultSection)`
  display: none;
  transform: var(--transform);
`;
export const Sec3 = styled(defaultSection)`
  display: none;
  transform: var(--transform);
`;
export const Sec4 = styled(defaultSection)`
  display: none;
  transform: var(--transform);
`;
export const Wrapper = styled.div``;
export const Text = styled.p``;
export const Heading = styled.h1``;
