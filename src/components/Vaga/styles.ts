import styled from 'styled-components'
import { Colors } from '../../styles'

export const VagaA = styled.li`
  border: 1px solid ${Colors.corPrincipal};
  background-color: ${Colors.corSecundaria};
  color: ${Colors.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  h3 {
    font-weight: bold;
    margin-bottom: 16px;
  }
  :hover {
    background-color: ${Colors.corPrincipal};
    color: ${Colors.corSecundaria};
    a {
      border-color: ${Colors.corPrincipal};
      background-color: ${Colors.corSecundaria};
      color: ${Colors.corPrincipal};
    }
  }
`

export const VagaLink = styled.a`
  border-color: ${Colors.corSecundaria};
  background-color: ${Colors.corPrincipal};
  color: ${Colors.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  :hover {
    border-color: ${Colors.corPrincipal};
    background-color: ${Colors.corSecundaria};
    color: ${Colors.corPrincipal};
  }
`
