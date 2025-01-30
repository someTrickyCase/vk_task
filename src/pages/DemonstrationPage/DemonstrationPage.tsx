import "./DemonstrationPage.css";

import { useState } from "react";
import Button from "../../Components/shared/Button/Button";

export default function DemonstrationPage() {
    const [state, setState] = useState({
        first: { value: 0, isLoading: false },
        second: { value: 0, isLoading: false },
        third: { value: 0, isLoading: false },
        fourth: { value: 0, isLoading: false },
    });

    function handleClick(button: number) {
        switch (button) {
            case 1:
                setTimeout(() => {
                    setState((prev) => {
                        return { ...prev, first: { value: 1200, isLoading: false } };
                    });
                }, 2000);
                setState((prev) => {
                    return { ...prev, first: { ...prev.first, isLoading: true } };
                });
                return;
            case 2:
                setTimeout(() => {
                    setState((prev) => {
                        return { ...prev, second: { value: 3, isLoading: false } };
                    });
                }, 1200);
                setState((prev) => {
                    return { ...prev, second: { ...prev.second, isLoading: true } };
                });
                return;
            case 3:
                setTimeout(() => {
                    setState((prev) => {
                        return { ...prev, third: { value: 10, isLoading: false } };
                    });
                }, 1800);
                setState((prev) => {
                    return { ...prev, third: { ...prev.third, isLoading: true } };
                });
                return;
            case 4:
                setTimeout(() => {
                    setState((prev) => {
                        return { ...prev, fourth: { value: 99, isLoading: false } };
                    });
                }, 900);
                setState((prev) => {
                    return { ...prev, fourth: { ...prev.fourth, isLoading: true } };
                });
                return;
        }
    }

    return (
        <main>
            <section className='fullscreen center-all'>
                <ul className='grid-3-cols'>
                    <li>
                        <article>{state.first.value}</article>
                        <Button onClick={() => handleClick(1)} isLoading={state.first.isLoading}>
                            <Button.Content>
                                <Button.ContentText>Загрузить очень много</Button.ContentText>
                                <Button.ContentCounter pulse />
                            </Button.Content>
                        </Button>
                    </li>
                    <li>
                        <article>{state.second.value}</article>
                        <Button
                            onClick={() => handleClick(2)}
                            isLoading={state.second.isLoading}
                            size='md'>
                            <Button.Content>
                                <Button.ContentText>Загрузить</Button.ContentText>
                                <Button.ContentCounter quantity={3} />
                            </Button.Content>
                        </Button>
                    </li>
                    <li>
                        <article>{state.third.value}</article>
                        <Button
                            onClick={() => handleClick(3)}
                            isLoading={state.third.isLoading}
                            size='lg'>
                            <Button.Content>
                                <Button.ContentText>Ну что поделать</Button.ContentText>
                                <Button.ContentCounter quantity={10} />
                            </Button.Content>
                        </Button>
                    </li>
                    <li>
                        <article>{state.fourth.value}</article>
                        <Button
                            isLoading={state.fourth.isLoading}
                            onClick={() => handleClick(4)}
                            size='lg'
                            variant='secondary'>
                            <Button.Content>
                                <Button.ContentText>Загрузить мало</Button.ContentText>
                            </Button.Content>
                        </Button>
                    </li>
                </ul>
            </section>
        </main>
    );
}
