import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjecForm.module.css";

const ProjecForm = ({ btnProject }) => {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orcamento do projeto"
        name="budget"
        placeholder="Insira o orcamento total"
      />
      <Select name="category_id" text="Selecione a categoria" />
      <SubmitButton text={btnProject} />
    </form>
  );
};

export default ProjecForm;
