import styled from 'styled-components'

export const Container = styled.View`
    background-color: #d3d3d3;
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 10px;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const ContainerInfo = styled.View`
    margin-right: 10px;
`

export const ContainerButton = styled.View`
    align-items: center;
    justify-content: space-between;
    height: 100%;
`

export const Name = styled.Text`
    font-size: 18px;
    font-weight: bold;
`

export const Price = styled.Text`
    font-size: 18px;
    color: #266299;
    font-weight: bold;
`

export const Button = styled.TouchableOpacity`
    padding: 5px;
    border-radius: 5px;
    width: 70px;
    height: 30px;
    align-items: center;
`

export const LabelButton = styled.Text`
    color: #000;

`