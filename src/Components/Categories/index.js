import React from 'react';
import { Badge, ListGroup, ListGroupItem } from 'reactstrap';
import data from '../../assets/data/categories.json';

const Categories = () => (
    <ListGroup className="nav nav-list mb-xlg border-0">
        {data.map((element, index) =>
            (
                <ListGroupItem className="border-0" key={index}>
                    <a href="google">
                        {element.name} <Badge color="secondary" className="float-right m-2">{element.number}</Badge>
                    </a>
                    {element.subcategories ?
                        <ListGroup>
                            {element.subcategories.map((subelement, index2) =>
                                (
                                    <ListGroupItem className="border-0" key={index2}>
                                        <a href="google">
                                            {subelement.name}
                                            <Badge className="float-right m-2" color="secondary">
                                                {subelement.number}
                                            </Badge>
                                        </a>
                                    </ListGroupItem>))
                            }
                        </ListGroup>
                        : null}
                </ListGroupItem>
            ))
        }
    </ListGroup>
);

export default Categories;
