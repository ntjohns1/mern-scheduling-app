import React, { useState, useEffect } from 'react';
import { useQuery } from "@apollo/client";
import { useSelector } from 'react-redux';
import { EVENTS_BY_DATE, GET_STUDENTS } from '../../utils/queries';
import { GET_STUDENTS} from '../../utils/mutations';
import times from '../../utils/helpers/times';
import { Card, Container, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';