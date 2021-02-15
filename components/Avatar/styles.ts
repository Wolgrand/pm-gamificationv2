import styled from 'styled-components';

export const Container = styled.div`
  /* Center the content */
  display: inline-block;
    vertical-align: middle;

    /* Used to position the content */
    position: relative;

    /* Colors */
    background-color: rgba(55, 65, 81);
    color: #FFF;
    /* Rounded border */
    border-radius: 50%;
`;
export const Letters = styled.div`
  /* Center the content */
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
`;
