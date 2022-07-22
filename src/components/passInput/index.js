import React, { useRef, useEffect } from "react";
import { useImmer } from "use-immer";
import { Space, Input } from "antd";
// relative
import { autoPrefix } from "utils";
import styles from "./index.less";

const cx = autoPrefix(styles.prefix);

const PassInput = (props) => {
  // props
  const { width, value, type, onChange } = props;

  // state
  const inputRef = useRef([]);

  const [passwords, setPasswords] = useImmer(["", "", "", "", "", ""]);

  //
  const onKeyUp = (index, event) => {
    if (event.key === "Backspace") {
      onPrevFocus(index);
    } else {
      if (passwords[index]) {
        onNextFocus(index);
      }
    }
  };

  // 值改变
  const onPasswordsChange = (index, event) => {
    const nextPasswords = [...passwords];
    nextPasswords[index] = event.target.value;
    onChange(nextPasswords.join(""));
  };

  // 聚焦下一个
  const onNextFocus = (index) => {
    let nextIndex = null;
    if (index < 5) {
      nextIndex = index + 1;
      inputRef.current[nextIndex].focus();
    } else {
      // nextIndex = 5;
    }
  };

  // 聚焦上一个
  const onPrevFocus = (index) => {
    let prevIndex = null;
    if (index > 0) {
      prevIndex = index - 1;
      inputRef.current[prevIndex].focus();
    } else {
      // prevIndex = 0;
    }
  };

  const onFixFocus = () => {
    let index = passwords.findIndex((item) => !item);
    if (index === -1) {
      index = 5;
    }
    inputRef.current[index].focus();
  };

  useEffect(() => {
    const nextPasswords = [];
    let valueArr = (value || "").split("");
    for (var i = 0; i < 6; i++) {
      nextPasswords.push(valueArr[i] || "");
    }
    setPasswords(nextPasswords);
  }, [value, setPasswords]);

  return (
    <div className={cx("container")} style={{ width }}>
      <Space onClick={onFixFocus}>
        <Input
          ref={(refEle) => {
            inputRef.current[0] = refEle;
          }}
          maxLength={1}
          type={type}
          value={passwords[0]}
          onChange={(event) => onPasswordsChange(0, event)}
          onKeyUp={(event) => onKeyUp(0, event)}
        />
        <Input
          ref={(refEle) => {
            inputRef.current[1] = refEle;
          }}
          maxLength={1}
          type={type}
          value={passwords[1]}
          onChange={(event) => onPasswordsChange(1, event)}
          onKeyUp={(event) => onKeyUp(1, event)}
        />
        <Input
          ref={(refEle) => {
            inputRef.current[2] = refEle;
          }}
          maxLength={1}
          type={type}
          value={passwords[2]}
          onChange={(event) => onPasswordsChange(2, event)}
          onKeyUp={(event) => onKeyUp(2, event)}
        />
        <Input
          ref={(refEle) => {
            inputRef.current[3] = refEle;
          }}
          maxLength={1}
          type={type}
          value={passwords[3]}
          onChange={(event) => onPasswordsChange(3, event)}
          onKeyUp={(event) => onKeyUp(3, event)}
        />
        <Input
          ref={(refEle) => {
            inputRef.current[4] = refEle;
          }}
          maxLength={1}
          type={type}
          value={passwords[4]}
          onChange={(event) => onPasswordsChange(4, event)}
          onKeyUp={(event) => onKeyUp(4, event)}
        />
        <Input
          ref={(refEle) => {
            inputRef.current[5] = refEle;
          }}
          maxLength={1}
          type={type}
          value={passwords[5]}
          onChange={(event) => onPasswordsChange(5, event)}
          onKeyUp={(event) => onKeyUp(5, event)}
        />
      </Space>
    </div>
  );
};

export default React.memo(PassInput);
