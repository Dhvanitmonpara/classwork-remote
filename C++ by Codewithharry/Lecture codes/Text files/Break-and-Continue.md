# Break

When your code hits break statement it exits loop block.

```cpp
    for (int i = 0; i < 40; i++)
    {
        if(i==2){
            break;
        }
        cout<<i<<endl;
    }
```

<br>

# Continue

When your code hits continue point it skips that iteration and continue from next iteration.

```cpp
    for (int i = 0; i < 40; i++)
    {
        /* code */
        if(i==2){
            continue;
        }
        cout<<i<<endl;
    }
```