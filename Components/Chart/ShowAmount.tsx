import styled from "styled-components";

const data = [
  {
    status: "Incoming",
    amount: "AED 1500.00",
  },
  {
    status: "Outgoing",
    amount: "AED 100.00",
  },
];

const CardsWrapper = styled.div`
  display: flex;
  gap: 70px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div:first-child {
    color: var(--text-color-black, #2d2d2d);
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
  }

  > div:nth-child(2) {
    color: var(--text-color-black, #2d2d2d);
    font-family: Roboto;
    font-size: 24px;
    font-weight: 600;
  }
`;

const ShowAmount = () => {
  return (
    <CardsWrapper>
      {data.map((item: any) => (
        <CardWrapper>
          <div>{item.status}</div>
          <div>{item.amount}</div>
        </CardWrapper>
      ))}
    </CardsWrapper>
  );
};

export default ShowAmount;
