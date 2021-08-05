import { useState, useRef, forwardRef, useImperativeHandle } from "react";
import { Modal, Button } from "antd";

// 2. React.forwardRef 将引用变量传递给子组件
const SonModal = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  // 3. useImperativeHandle 将子组件内定义的函数作为属性，添加到父组件中的 ref 对象上。
  useImperativeHandle(ref, () => ({
    open: () => {
      setVisible(true);
    },
  }));

  return (
    <Modal title="🌰" visible={visible} onCancel={() => setVisible(false)}>
      使用 useRef + useImperativeHandle 调用 Modal 内部的方法来打开它
    </Modal>
  );
});

export default function WrapperModal() {
  // 1. 使用 useRef 创建引用变量
  const sonModalRef = useRef(null);

  return (
    <div className="App">
      <Button onClick={() => sonModalRef.current.open()}>打开 Modal</Button>
      <SonModal ref={sonModalRef} />
    </div>
  );
}

// connect 包装一下的问题？
