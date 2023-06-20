import styled from 'styled-components';

export const MainConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 20px;
    width: 150px;
  }

  .item {
    display: flex;
    gap: 10px;
    height: 50px;
    align-items: center;
  }

  .button {
    background-color: rgba(51, 51, 51, 0.05);
    border-radius: 8px;
    border-width: 0;
    color: #333333;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 26px;
    font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial,
      sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    list-style: none;
    margin: 0;
    padding: 10px 12px;
    text-align: center;
    transition: all 200ms;
    vertical-align: baseline;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
`;
