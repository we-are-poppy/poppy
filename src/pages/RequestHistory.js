import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ConfirmBox from "../components/ConfirmBox";
import NavBar from "../components/NavBar";

export default function ReservationHistory() {
  //2021.01.23
  const reservationList = [
    {
      target_petsitter: "김성일",
      service: ["소형견", "당일 돌봄"],
      date: "2021.01.17",
      total_fee: 30000,
    },
    {
      target_petsitter: "명유리",
      service: ["소형견", "당일 돌봄"],
      date: "2021.01.19",
      total_fee: 20000,
    },
  ];

  return (
    <Wrapper>
      <NavBar titleName="들어온 신청" />
      <Header>최근 신청 내역 순으로 신청 내역이 보여집니다.</Header>
      <ReservationList>
        {reservationList.map((reservation, index) => {
          return (
            <Link
              to={{
                pathname: "requesthistorydetail",
                state: {
                  name: reservation.target_petsitter,
                  dogSize: reservation.service[0],
                  date: reservation.date,
                  cost: reservation.total_fee,
                },
              }}
            >
              <ConfirmBox reservation={reservation} />
            </Link>
          );
        })}
      </ReservationList>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  a {
    text-decoration: none;
  }
`;

const Header = styled.div`
  margin-top: 28px;
  height: 34.6px;

  font-family: "Noto Sans KR";
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: -1px;
  text-align: center;
  color: #505050;
`;
const ReservationList = styled.div`
  margin-left: 25px;
  margin-right: 24px;
  margin-top: 7.4px;
`;
