import React, { useState } from "react";
import { Modal } from "antd";

function useModal() {
  const [visible, changeVisible] = useState(false);

  const toggleModalVisible = () => {
    changeVisible(!visible);
  };

  return [
    // 第一个参数, Dom 节点
    <Modal
      visible={visible}
      onOk={toggleModalVisible}
      onCancel={toggleModalVisible}
    >
      弹窗内容
    </Modal>,
    // 第二个参数 自定义方法
    toggleModalVisible
  ];
}

export default function ModalExamples() {
  const [modal, toggleModal] = useModal();
  return (
    <div>
      <div>
        {modal}
        <button onClick={toggleModal}>打开弹窗</button>
      </div>
    </div>
  );
}
