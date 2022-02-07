# Get-react-props

TS utility types to extract component props

## Install

```bash
npm install get-react-props
```

## Usage

```tsx
import { GetProp, GetProps } from 'get-react-props';

const Foo: FC<{ foo: 'bar' }> = ({ foo }) => {
  return <div>{foo}</div>;
};

const Bar: FC<{ fooProps: GetProps<typeof Foo> }> = ({ fooProps }) => {
  return (
    <div>
      <Bar {...fooProps} />
    </div>
  );
};

const Baz: FC<{ foo: GetProp<typeof Foo, 'foo'> }> = ({ foo }) => {
  return (
    <div>
      <Foo foo={foo} />
    </div>
  );
};
```
