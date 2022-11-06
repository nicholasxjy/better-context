import React, { useContext } from "react";
import { Row, Col, Input, Select, Card, Typography } from "antd";
import { useAppContext } from "../AppContext";

export type SearchFieldProps = {
  label: string;
  control: React.ReactNode;
};

const SearchField = ({ label, control }: SearchFieldProps) => {
  return (
    <Row>
      <Col span={4}>{label}</Col>
      <Col span={20}>{control}</Col>
    </Row>
  );
};

const AgeSelect = () => {
  const [query, setQuery] = useAppContext()!;
  return (
    <Select
      placeholder="select"
      style={{ width: "100%" }}
      value={query.age}
      onChange={(val) => {
        setQuery({ age: val });
      }}
    >
      <Select.Option key="0" value="25">
        {"age < 25"}
      </Select.Option>
      <Select.Option key="1" value="30">
        {"age < 30"}
      </Select.Option>
    </Select>
  );
};

const ScoreSelect = () => {
  const [query, setQuery] = useAppContext()!;
  return (
    <Select
      placeholder="select"
      style={{ width: "100%" }}
      value={query.score}
      onChange={(val) => {
        setQuery({ score: val });
      }}
    >
      <Select.Option key="0" value="25">
        {"score < 25"}
      </Select.Option>
      <Select.Option key="1" value="30">
        {"score < 30"}
      </Select.Option>
      <Select.Option key="2" value="40">
        {"score < 40"}
      </Select.Option>
    </Select>
  );
};

function SearchForm() {
  const [query, setQuery] = useAppContext()!;

  console.log("query: ", query);

  return (
    <Card
      type="inner"
      title={<Typography.Title level={4}>FormContainer</Typography.Title>}
    >
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <SearchField
            label="Name"
            control={
              <Input
                placeholder="enter"
                value={query.name}
                onChange={(e) => {
                  setQuery({ name: e.target.value });
                }}
              />
            }
          />
        </Col>
        <Col span={6}>
          <SearchField
            label="Team"
            control={
              <Input
                placeholder="enter"
                value={query.team}
                onChange={(e) => {
                  setQuery({ team: e.target.value });
                }}
              />
            }
          />
        </Col>
        <Col span={6}>
          <SearchField label="Age" control={<AgeSelect />} />
        </Col>
        <Col span={6}>
          <SearchField label="score" control={<ScoreSelect />} />
        </Col>
      </Row>
    </Card>
  );
}

export default SearchForm;
