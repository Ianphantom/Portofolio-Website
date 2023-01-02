import React from "react";
import styled from "styled-components";

const HomeContact = () => {
  return (
    <SectionContainer>
      <div className='container'>
        <div className='head'>
          <div className='title text-36 text-color-2 weight-bold'>
            Say Hello
          </div>
          <div className='sub-title text-14 weight-bold text-subtitle'>
            Subheading or information goes here
          </div>
        </div>
        <div className='bottom'>
          <div className='row'>
            <div className='col-md-6 form-area'>
              <div className='two-col'>
                <div className='input-text'>
                  <input type='text' name='Name' id='Name' placeholder='Name' />
                </div>
                <div className='input-text'>
                  <input
                    type='text'
                    name='mail'
                    id='mail'
                    placeholder='Email'
                  />
                </div>
              </div>
              <div className='input-text'>
                <input
                  type='text'
                  name='subject'
                  id='subject'
                  placeholder='Subject'
                />
              </div>
              <div className='input-text send'>
                <textarea name='message' id='message'>
                  Pesan Anda
                </textarea>
                <div className='button-send'>
                  <div className='text-icon'>
                    <div className='text text-17 weight-medium'>Send Now</div>
                    <svg
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M2.04688 21L23.0469 12L2.04688 3V10L17.0469 12L2.04688 14V21Z'
                        fill='white'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 right-side'>
              <div className='information-container'>
                <div className='icon-title'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5M12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2V2Z'
                      fill='#6138BD'
                    />
                  </svg>

                  <div className='weight-medium text-17 text-color-2'>
                    My Location
                  </div>
                </div>
                <div className='text-17 weight-regular text-subtitle'>
                  Jalan Kejawan Putih Tambak gang 4c, Mulyorejo, Surabaya
                </div>
              </div>
              <div className='information-container'>
                <div className='icon-title'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.2652 15.5 20.5196 15.6054 20.7071 15.7929C20.8946 15.9804 21 16.2348 21 16.5V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21C15.4913 21 11.1673 19.2089 7.97918 16.0208C4.79107 12.8327 3 8.50868 3 4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H7.5C7.76522 3 8.01957 3.10536 8.20711 3.29289C8.39464 3.48043 8.5 3.73478 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z'
                      fill='#6138BD'
                    />
                  </svg>

                  <div className='weight-medium text-17 text-color-2'>
                    Give a Call
                  </div>
                </div>
                <div className='text-17 weight-regular text-subtitle'>
                  +62 8238942 4609
                </div>
              </div>
              <div className='information-container'>
                <div className='icon-title'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20 8L12 13L4 8V6L12 11L20 6M20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 4.89 21.1 4 20 4Z'
                      fill='#6138BD'
                    />
                  </svg>

                  <div className='weight-medium text-17 text-color-2'>
                    Email Me
                  </div>
                </div>
                <div className='text-17 weight-regular text-subtitle'>
                  ian25yola@gmail.com
                </div>
              </div>
              <div className='socialMedia'>
                <div className='media linkedin'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z' />
                  </svg>
                  <span className='textInfo weight-medium'>
                    Follow On LinkedIn
                  </span>
                </div>
                <div className='media github'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2V2Z' />
                  </svg>
                  <span className='textInfo weight-medium'>
                    Follow On Github
                  </span>
                </div>
                <div className='media instagram'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2M7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z' />
                  </svg>
                  <span className='textInfo weight-medium'>
                    Follow On Instagram
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  width: 100%;
  background: #f7f8fa;
  padding: 100px 0px;

  .head {
    margin-bottom: 40px;
    .title {
      margin-bottom: 6px;
    }
  }

  .bottom {
    .form-area {
      display: flex;
      flex-direction: column;
      gap: 10px;

      input {
        width: 100%;
        border: none;
        outline-color: rgba(17, 32, 77, 0.25);
        font-family: "Jost";
        font-style: normal;
        font-weight: 400;
        font-size: 16.15px;
        line-height: 23px;
        color: black;
      }

      textarea {
        width: 100%;
        height: 148px;
        border: none;
      }
      .two-col {
        display: flex;
        justify-content: space-between;
        gap: 10px;
      }
      .input-text {
        width: 100%;
        padding: 17px 20px;
        background: #ffffff;
        border: 1px solid rgba(17, 32, 77, 0.15);
        border-radius: 10px;
      }

      .send {
        cursor: pointer;
        position: relative;
        .button-send {
          position: absolute;
          left: 30%;
          padding: 16px 29px;
          color: white;
          border-radius: 10px;
          background-color: #6138bd;
          .text-icon {
            display: flex;
            gap: 11px;
            align-items: center;
          }
        }
      }
    }
  }

  .right-side {
    display: flex;
    flex-direction: column;
    gap: 34px;

    .information-container {
      display: flex;
      flex-direction: column;
      gap: 13px;
      .icon-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
      }
    }

    .socialMedia {
      display: flex;
      align-items: center;
      gap: 6.31px;
      .media {
        cursor: pointer;
        padding: 16.39px 16.12px 16.31px 16.08px;
        border: 1px solid rgba(17, 32, 77, 0.15);
        border-radius: 10px;
        transition: all 1s ease;
        display: flex;
        align-items: center;
        gap: 10px;

        span {
          display: none;
        }

        svg {
          fill: #11204d;
        }

        &:hover {
          color: #6138bd;
          svg {
            fill: #6138bd;
          }

          span {
            display: block;
            animation: fade_in_show 0.5s ease;
          }

          @keyframes fade_in_show {
            0% {
              opacity: 0;
              transform: scale(0);
            }

            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .right-side {
      margin-top: 80px;

      .information-container {
        padding-right: 10px;
        padding-left: 10px;
        text-align: center;
        .icon-title {
          justify-content: center;
        }
      }

      .socialMedia {
        justify-content: center;
      }
    }
  }
`;

export default HomeContact;
