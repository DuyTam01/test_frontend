import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container, ListGroup, ListGroupItem, Table } from 'reactstrap'
import AddChemical from './AddChemical'


export default function ChemicalItem() {
  const {deleteChemicals } = useDispatch()
  const { chemicals } = useSelector(state => state.chemicals)
  console.log(chemicals)
  return (
    <div>
      <Container>
        <AddChemical />
        <Table>
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                Name
              </th>
              <th>
              Formula
              </th>
              <th>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              chemicals.map((item, index) =>
                <tr>
                  <th scope="row">
                    {index+1}
                  </th>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    {item.formula}
                  </td>
                  <td>
                    <Button color='danger' onClick={()=>(deleteChemicals(item.id))} >X</Button>
                  </td>
                </tr>
              )}


          </tbody>
        </Table>

      </Container>


    </div>
  )
}
