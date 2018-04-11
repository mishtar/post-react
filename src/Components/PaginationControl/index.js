import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';

const PaginationControl = props => (
    <Pagination>
        <PaginationItem>
            <PaginationLink previous href="#" />
        </PaginationItem>
        {Array(props.TotalRecordCount / props.PageSize).fill(1).map((el, i) =>
            (
                <PaginationItem key={i}>
                    <PaginationLink href="#">
                        {i}
                    </PaginationLink>
                </PaginationItem>
            ))
        }
        <PaginationItem>
            <PaginationLink next href="#" />
        </PaginationItem>
    </Pagination>
);

PaginationControl.propTypes = {
    TotalRecordCount: PropTypes.number.isRequired,
    PageSize: PropTypes.number.isRequired
};

export default PaginationControl;
